"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../configs";
import { Jsonforms } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import ResponseListItem from "./_components/ResponseListItem";
const Responses = () => {
  const { user } = useUser();
  const [formList, setformList] = useState([]);
  const getFormList = async () => {
    const result = await db
      .select()
      .from(Jsonforms)
      .where(eq(Jsonforms.createdBy, user.primaryEmailAddress?.emailAddress));
    console.log(result);
    setformList(result);
  };

  useEffect(() => {
    user && getFormList();
  }, []);
  return (
    <div className="p-10">
        <h2 className="text-3xl mb-12 font-bold flex items-center justify-between">
        Responses
      </h2>
      <h2 className="font-bold flex items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {formList && formList.map((item, index) => (
            <ResponseListItem item={item} key={index} />
          ))}
        </div>
      </h2>
    </div>
  );
};

export default Responses;
