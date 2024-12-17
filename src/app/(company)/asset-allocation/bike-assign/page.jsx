"use client"
import React from "react";
import AssignBike from "@/components/company-flow/asset-allocation/bike";
import CustomBreadcrumb from "@/app/Components/sharedComponents/BreadCrum/page";
import { Separator } from "@/components/ui/separator";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";

const page = () => {
  return (
    <div className="px-5">
      <div className="flex flex-row items-center justify-between ">
        {/* <CustomBreadcrumb name="Asset Allocation" /> */}
        <DynamicBreadcrumb />
      </div>
      <div className="my-4">
        <Separator />
      </div>
      <AssignBike />
    </div>
  );
};

export default page;
