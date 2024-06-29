import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../@/components/ui/alert-dialog";
import { db } from "../../../configs";
import { Jsonforms, userResponse } from "../../../configs/schema";
import { and, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { RWebShare } from "react-web-share";

const FormItem = ({ item, refreshData }) => {
  const data = JSON.parse(item.jsonform);
  console.log(data);
  const { user } = useUser();
  const router = useRouter();

  const ondeleteForm = async () => {
    const res=await db.delete(userResponse).where(eq(userResponse.formRef,item.id))

    const result = await db
      .delete(Jsonforms)
      .where(
        and(
          eq(Jsonforms.id, item.id),
          eq(Jsonforms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );

    if (result) {
      toast("Form has been deleted");
      refreshData();
    }
  };
  return (
    <div className="ounded-lg shadow-md border  p-5  rounded-lg capitalize flex flex-col ">
      <div className="flex justify-between">
        <div className="font-bold r">{data.formTitle}</div>
        <div>
          <AlertDialog>
            <AlertDialogTrigger>
              <Trash
                height={20}
                width={20}
                className="hover:scale-110 transition-all duration-300 text-red-400 cursor-pointer"
              />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction onClick={() => ondeleteForm()}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="text-xs mb-2">{data.formHeading}</div>
      <hr />
      <div className="mt-4 flex justify-between">
        <RWebShare
          data={{
            text: data.formHeading+", BuildFormAI",
            url: process.env.NEXT_PUBLIC_BASE_URL+"/aiform/"+item.id,
            title: data.formTitle,
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <Button
            variant="outline"
            onClick={() => router.push("/edit-form/" + item.id)}
            className="hover:bg-orange-400 hover:text-white transition-all duration-300"
          >
            Share
          </Button>
        </RWebShare>
        <Button
          onClick={() => router.push("/edit-form/" + item.id)}
          className="hover:bg-orange-400 hover:text-white transition-all duration-300"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default FormItem;
