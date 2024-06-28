"use client";

import { and, eq } from "drizzle-orm";
import { db } from "../../../configs";
import { Jsonforms } from "../../../configs/schema";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft, LucideChevronUpSquare, Share } from "lucide-react";
import { useRouter } from "next/navigation";
import FormUI from "./_components/FormUI";
import { toast } from "sonner";
import Controller from "./_components/Controller";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { RWebShare } from "react-web-share";
import Footer from "../../_components/Footer";
const EditForm = ({ params }) => {
  const router = useRouter();
  const { user } = useUser();
  const [jsonForm, setjsonForm] = useState([]);
  const [updateTrigger, setupdateTrigger] = useState();
  const [record, setrecord] = useState([]);
  const [selectedTheme, setselectedTheme] = useState("light");
  const [selectedBackground, setselectedBackground] = useState("light");
  console.log("At page tsx :", selectedTheme);
  useEffect(() => {
    user && getFormData();
  }, [user]);

  const getFormData = async () => {
    try {
      const result = await db
        .select()
        .from(Jsonforms)
        .where(
          and(
            eq(Jsonforms.id, params?.formId),
            eq(Jsonforms.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );
      setrecord(result[0]);
      const data = result[0].jsonform;
      console.log(data);
      console.log(JSON.parse(data));
      setjsonForm(JSON.parse(data));
      setselectedBackground(result[0].background || "light");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setjsonForm(jsonForm);
    updateJsonFormInDB();
  }, [updateTrigger]);

  const onFieldUpdate = (value, index) => {
    jsonForm.fields[index].fieldLabel = value.label;
    jsonForm.fields[index].fieldPlaceholder = value.placeholder;
    setupdateTrigger(Date.now());
  };

  const updateJsonFormInDB = async () => {
    const result = await db
      .update(Jsonforms)
      .set({
        jsonform: jsonForm,
      })
      .where(
        and(
          eq(Jsonforms.id, record.id),
          eq(Jsonforms.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    toast("The relative field name has been updated.");

    console.log(result);
  };

  const deleteField = (indexToRemove) => {
    const result = jsonForm.fields.filter(
      (item, index) => index !== indexToRemove
    );

    console.log(result);
    jsonForm.fields = result;
    setupdateTrigger(Date.now());
  };

  const updateControllerFields = async (value, columnName) => {
    // Drizzle has not been updated
    // console.log("Will update the theme and bgtheme");

    // const result = await db
    //   .update(Jsonforms)
    //   .set({ [columnName]: value })
    //   .where(
    //     and(
    //       eq(Jsonforms.id, record.id),
    //       eq(Jsonforms.createdBy, user?.primaryEmailAddress.emailAddress)
    //     )
    //   )
    //   .returning({ id: Jsonforms.id });

    const result = await db
      .update(Jsonforms)
      .set({ [columnName]: value })
      .where(
        and(
          eq(Jsonforms.id, record.id),
          eq(Jsonforms.createdBy, user?.primaryEmailAddress.emailAddress)
        )
      )
      .returning({id:Jsonforms.id});

    console.log(result);
    toast("Updated the relevant theme and styling");
  };

  return (
    <>
    <div className="p-10">
      <h2
        onClick={() => router.back()}
        className="flex gap-2 items-center my-5 cursor-pointer hover:font-bold transition-all"
        >
        <ArrowLeft />
        Back
      </h2>
      <div className="flex gap-3 my-2 justify-end">
        <Link href={"/aiform/" + record.id} target="_blank">
          <Button className="bg-orange-400 transition-all duration-300 gap-2">
            <LucideChevronUpSquare /> Live Preview
          </Button>
        </Link>
        <RWebShare
          data={{
            text: jsonForm.formHeading+", BuildFormAI",
            url: process.env.NEXT_PUBLIC_BASE_URL+"/aiform/"+record?.id,
            title: jsonForm.formTitle,
            }}
            onClick={() => console.log("shared successfully!")}
            >
           <Button className=" transition-all duration-300 gap-2 bg-green-600">
            <Share /> Share
          </Button>
        </RWebShare>
         
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 border rounded-lg shadow-md">
          <Controller
            selectedBackground={(value) => {
              updateControllerFields(value, "background");
              setselectedBackground(value);
              }}
              selectedTheme={(value) => {
                updateControllerFields(value, "theme");
              setselectedTheme(value);
              }}
              setsigninEnabled={(value)=>{
                updateControllerFields(value, "enabledSignIn");
                
                }}
                />
        </div>
        <div
          style={{ backgroundImage: selectedBackground }}
          className="md:col-span-2 border rounded-lg p-5 flex items-center justify-center"
          >
          <FormUI
            deleteField={(index) => deleteField(index)}
            jsonForm={jsonForm}
            onFieldUpdate={onFieldUpdate}
            selectedTheme={selectedTheme}
            />
        </div>
      </div>
    </div>
      <Footer className="fixed bottom-2" />
          </>
  );
};

export default EditForm;
