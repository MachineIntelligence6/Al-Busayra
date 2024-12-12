"use client";

import CustomBreadcrumb from "@/app/Components/sharedComponents/BreadCrum/page";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EmptyScreen from "@/components/asset-allocation";
import AssetAllocationTableModal from "@/components/asset-allocation/AssetAllocationTableModal";

const page = () => {
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
      <div className="py-5">
        <Separator />
      </div>
      <EmptyScreen />
      {showPopup && <AssetAllocationTableModal onClose={onClose} />}
    </div>
  );
};

export default page;
