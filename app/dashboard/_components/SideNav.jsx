"use client";
import { Progress } from "../../../components/ui/progress";
import { Button } from "../../../components/ui/button";
import {
  AreaChart,
  LibraryBig,
  MessageSquareQuote,
  ShieldPlus,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Jsonforms } from "../../../configs/schema";
import { db } from "../../../configs";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";

const SideNav = () => {
  const { user } = useUser();
  const [formList, setformList] = useState();
  const [perfileCreated, setperfileCreated] = useState(0);
  const router=useRouter();

  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 1,
      name: "Responses",
      icon: MessageSquareQuote,
      path: "/dashboard/responses",
    },
    {
      id: 1,
      name: "Analytics",
      icon: AreaChart,
      path: "/dashboard/analytics",
    },
    {
      id: 1,
      name: "Upgrade",
      icon: ShieldPlus,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
    user && getFormList();
  }, [user]);

  const getFormList = async () => {
    const result = await db
      .select()
      .from(Jsonforms)
      .where(eq(Jsonforms.createdBy, user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(Jsonforms.id));
    setformList(result);
    const count = result.length;
    const v = Number((result.length / 3) * 100);
    setperfileCreated(v);
    console.log(result);
  };

  return (
    <div className="h-screen shadow-md border">
      <div className="w-full flex justify-end p-3"></div>
      <div className="flex flex-col gap-4 p-4 text-gray-500">
        {menuList.map((item, index) => (
          <Link href={item.path} key={index}>
            <h2
              className={`flex gap-2 cursor-pointer p-3 mb-3 
                hover:bg-orange-400 hover:text-white rounded-md transition-all duration-300
                ${path === item.path && "bg-primary text-white"}
                `}
            >
              <item.icon />
              {item.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-24 p-2 flex flex-col  justify-center items-center w-64">
        {formList && formList.length >= 3 ? (
          <Button onClick={()=>router.push("/dashboard/upgrade")} className="w-full bg-orange-400">Upgrade</Button>
        ) : (
          <></>
        )}
        <div className="my-5 w-full items-center justify-center">
          <Progress
            className="bg-gray-100"
            value={perfileCreated > 100 ? 100 : perfileCreated}
          />
          <h2 className="text-sm text-gray-500 my-2 text-center">
            <strong className="mx-1">{formList?.length}</strong>out of
            <strong className="mx-1">3</strong> File Created
          </h2>
          <h2 className="text-center text-sm text-gray-500 font-bold">
            {formList?.length >= 3 ? "Limit exceeded, Buy Plans" : ""}{" "}
          </h2>
          <h2 className="text-sm text-center text-gray-500 p-2 items-center ">
            Upgrade your plan for building unlimited AI forms
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
