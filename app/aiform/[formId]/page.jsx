"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../configs";
import { Jsonforms } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import FormUI from "../../edit-form/[formId]/_components/FormUI";
import Image from "next/image";
import Link from "next/link";

const LiveBuildFormsAI = ({ params }) => {
  const [record, setrecord] = useState();
  const [JsonForm, setJsonForm] = useState([]);
  useEffect(() => {
    console.log(params);
    params && getFormData();
  }, []);
  const getFormData = async () => {
    const result = await db
      .select()
      .from(Jsonforms)
      .where(eq(Jsonforms.id, Number(params?.formId)));
    setrecord(result[0]);
    setJsonForm(JSON.parse(result[0].jsonform));
    console.log(result);
  };
  return (
    <div className="p-10 flex flex-col items-center"
    style={{backgroundImage:record?.background}}
    >
      <FormUI
        jsonForm={JsonForm}
        onFieldUpdate={() => console.log()}
        deleteField={() => console.log()}
        selectedTheme={record?.theme}
        editable={false}
        formId={record.id}
      />

      <Link href={process.env.NEXT_PUBLIC_BASE_URL} className="bg-white p-3 rounded-lg flex gap-2 fixed bottom-2 left-2">
        <Image src={"/logo.svg"} width={30} height={30} />
         BuildFormsAI
      </Link>
    </div>

  );
};

export default LiveBuildFormsAI;
