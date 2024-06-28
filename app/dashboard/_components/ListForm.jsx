"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { db } from "../../../configs";
import { Jsonforms } from "../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import FormItem from "./FormItem"
const ListForm = () => {
  const { user } = useUser();
  const [formList, setformList] = useState();
  

  useEffect(() => {
    user && getFormList();
  },[]);
  const getFormList = async () => {
    const result = await db
      .select()
      .from(Jsonforms)
      .where(eq(Jsonforms.createdBy, user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(Jsonforms.id));
    setformList(result);
   

    console.log(result);
  };
  return <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {
           formList && formList.map((item,index)=>(
                <div key={index}>
                    <FormItem item={item} refreshData={getFormList}/>
                </div>
            ))
        }
    </div>
  </div>;
};

export default ListForm;
