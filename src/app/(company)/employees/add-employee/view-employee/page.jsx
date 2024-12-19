import React from "react";
import DynamicBreadcrumb from "@/components/shared-components/BreadCrumb";
import { Separator } from "@/components/ui/separator";
import EmployeeView from "@/components/company-flow/employees/view-employee";

const page = () => {
  return (
    <div className="px-4">
      <DynamicBreadcrumb />
      <div className="py-2">
        <Separator />
      </div>
      <EmployeeView />
    </div>
  );
};

export default page;
