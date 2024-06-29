import { SignedIn } from "@clerk/nextjs";
import React from "react";
import Pricing from "./_components/Pricing"

const Upgrade = () => {
  return (
    <SignedIn>
      <div className="p-10">
        <h2 className="text-3xl font-bold flex items-center justify-between">
          Upgrade Your Plans
        </h2>
        <Pricing />
      </div>
    </SignedIn>
  );
};

export default Upgrade;
