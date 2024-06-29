"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../@/components/ui/textarea";
import { AIChatSession } from "../../../configs/AImodel";
import { useUser } from "@clerk/nextjs";
import { Jsonforms } from "../../../configs/schema";
import { db } from "../../../configs";
import moment from "moment/moment";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { eq } from "drizzle-orm";

const CreateForm = () => {
  const router = useRouter();
  const { user } = useUser();
  const [openDialog, setOpenDialog] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [loading, setloading] = useState();

  const [isFree, setisFree] = useState(true);

  useEffect(() => {
    user && getFormList();
  },[]);
  const getFormList = async () => {
    const result = await db
      .select()
      .from(Jsonforms)
      .where(eq(Jsonforms.createdBy, user?.primaryEmailAddress.emailAddress))
         
    const count=result.length;
    setisFree(count>=3? false:true)
    console.log(result);
  };

  const onCreateForm = async () => {
    console.log(userInput);
    setloading(true);
    const result = await AIChatSession.sendMessage(
      `Description: ${userInput}. On the basis of the description provided, please give form in json format with formtitle, formheading along with fieldname,fieldtitle, fieldplaceholder,fieldlabel, fieldtype, required field in json format. Only Provide in json format. You don't have to write """json""" `
    );
    console.log(result.response.text());
    if (result.response.text()) {
      const response = await db
        .insert(Jsonforms)
        .values({
          jsonform: result.response.text(),
          createdBy: user?.primaryEmailAddress.emailAddress,
          createdAt: moment().format("DD/MM/YYYY"),
        })
        .returning({ id: Jsonforms.id });
      console.log("New Form ID: ", response[0].id);
      setloading(false);
      setUserInput("");
      if (response[0].id) {
        router.push("/edit-form/" + response[0].id);
      }
    }
  };
  return (
    <div>
      {isFree ? (
        <Button
          onClick={() => setOpenDialog(true)}
          className="hover:bg-orange-400"
        >
          + Create Form
        </Button>
      ) : (
        <Button
          onClick={() => router.push("/dashboard/upgrade")}
          className="hover:bg-orange-400"
        >
          Upgrade
        </Button>
      )}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Form</DialogTitle>
            <DialogDescription>
              <Textarea
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Write desscription of your form"
              />
              <div className="flex my-4 gap-3 justify-end">
                <Button
                  onClick={() => setOpenDialog(false)}
                  className="bg-orange-400"
                  variant="destructive"
                >
                  Cancel
                </Button>
                <Button
                  disabled={loading || userInput === ""}
                  onClick={onCreateForm}
                  className="hover:bg-blue-500"
                >
                  {loading ? <Loader2 className="animate-spin" /> : "Create"}
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateForm;
