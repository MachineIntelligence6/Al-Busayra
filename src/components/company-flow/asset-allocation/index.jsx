"use client";

import CustomBreadcrumb from "@/app/Components/sharedComponents/BreadCrum/page";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import EmptyScreen from "./EmptyScreen";
import TableModal from "./table/TableModal";
import AllocateAssetTable from "./table";

const AssetAllocation = () => {
  const [showPopup, setShowPopup] = useState(false);

  const onClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <CustomBreadcrumb name="Asset Allocation" />
        <Button
          className="bg-[#296291] hover:bg-[#4080b4]"
          onClick={() => setShowPopup(true)}
        >
          <Plus />
          Allocate Asset
        </Button>
      </div>
      <div className="py-2">
        <Separator />
      </div>

      {true ? <AllocateAssetTable /> : <EmptyScreen />}

      {showPopup && <TableModal onClose={onClose} />}
    </div>
  );
};

export default AssetAllocation;
