import React from "react";
import SimAssignedForm from "@/components/company-flow/asset-allocation/sim";
import { Separator } from "@/components/ui/separator";
import DynamicBreadcrumb from "@/components/shared-components/BreadCrumb";

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
      <SimAssignedForm />
    </div>
  );
};

export default page;
