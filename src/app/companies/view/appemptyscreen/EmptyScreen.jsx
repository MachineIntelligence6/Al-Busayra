"use client";

import React from "react";
import { Reusee } from "./Reusee";

const handleClick = () => {
  console.log("Button Clicked!");
};

export const EmptyScreen = () => {
  return (
    <div className="h-full">
      <div className="mb-4 ">Applicants</div>
      <div className="flex flex-col justify-center items-center h-full gap-7 border-t-2">
        <Reusee
          image="/resuable/ifream.svg"
          altText="My Image"
          title="No Applicant Added"
          description="Please click the button below to add a new Employee."
          buttonText="Add Applicant"
          onButtonClick={handleClick}
        />
      </div>
    </div>
  );
};

export default EmptyScreen;
