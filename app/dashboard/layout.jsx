"use client";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import { Button } from "../../components/ui/button";

const DashboardLayout = ({ children }) => {
  const [isOpen, setisOpen] = useState(true);

  return (
    <>
      <SignedIn>
        <div>
          {!isOpen && (
            <Button
              onClick={() => setisOpen(!isOpen)}
              variant="outline"
              className=" top-18  absolute text-center flex"
            >
              Open
            </Button>
          )}
          <div className={`${isOpen? 'w-full':'hidden'} bg-white md:bg-transparent md:w-64 absolute md:fixed`}>
            <Button
              onClick={() => setisOpen(!isOpen)}
              variant="outline"
              className="md:hidden rotate-90 right-0 top-44 absolute text-center flex"
            >
              {!isOpen ? "Open" : "Close"}
            </Button>
            <SideNav />
          </div>
          <div className="md:ml-64">{children}</div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default DashboardLayout;
