import React from "react";
import AssignBike from "@/components/company-flow/asset-allocation/bike";
import CustomBreadcrumb from "@/app/Components/sharedComponents/BreadCrum/page";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <CustomBreadcrumb name="Asset Allocation" />
      </div>
      <div className="py-5">
        <Separator />
      </div>
      <AssignBike />
    </div>
  );
};

export default page;
