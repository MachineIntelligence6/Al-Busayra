import React from "react";
import SimAssignedForm from "@/components/company-flow/asset-allocation/sim";
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
      <SimAssignedForm />
    </div>
  );
};

export default page;
