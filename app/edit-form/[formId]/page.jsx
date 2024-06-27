"use client";

import { and, eq } from "drizzle-orm";
import { db } from "../../../configs";
import { Jsonforms } from "../../../configs/schema";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import FormUI from "./_components/FormUI";
import { toast } from "sonner";

const EditForm = ({ params }) => {
  const router = useRouter();
  const { user } = useUser();
  const [jsonForm, setjsonForm] = useState([]);
  const [updateTrigger, setupdateTrigger] = useState();
  const [record, setrecord] = useState([]);
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

  const updateJsonFormInDB = async() => {
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
    toast('Field name and placeholder has been updated.')

    console.log(result);
  };

  const deleteField=(indexToRemove)=>{
    const result =jsonForm.fields.filter((item,index)=>index!==indexToRemove)
    
    toast('The relative field has been deleted successfully.')
    console.log(result);
    jsonForm.fields=result;
    setupdateTrigger(Date.now());

  }

  return (
    <div className="p-10">
      <h2
        onClick={() => router.back()}
        className="flex gap-2 items-center my-5 cursor-pointer hover:font-bold transition-all"
      >
        <ArrowLeft />
        Back
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 border rounded-lg shadow-md">Controller</div>
        <div className="md:col-span-2 border rounded-lg p-5 flex items-center justify-center">
          <FormUI 
          deleteField={(index)=>deleteField(index)}
          jsonForm={jsonForm} onFieldUpdate={onFieldUpdate} />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
