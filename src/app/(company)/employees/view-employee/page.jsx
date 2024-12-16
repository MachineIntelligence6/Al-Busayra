import React from "react";
import CustomBreadcrumb from "@/app/Components/sharedComponents/BreadCrum/page";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import { Separator } from "@/components/ui/separator";
import EmployeeView from "@/components/company-flow/employees/view-employee";

const page = () => {
  return (
    <div className="px-4">
      {/* <CustomBreadcrumb name="Asset Allocation" /> */}
      <DynamicBreadcrumb />
      <div className="py-2">
        <Separator />
      </div>
      <EmployeeView />
    </div>
  );
};

export default page;
