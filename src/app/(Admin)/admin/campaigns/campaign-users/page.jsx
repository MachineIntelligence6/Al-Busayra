"use client";
import { useState } from "react";
import ApplicantsTableWrapper from "@/components/applicants/ApplicantsTableWrapper";
import { Box, Divider } from "@mui/material";
import GenericModal from "@/components/applicants/GenericModel";
import MultiStepFormModel from "@/components/applicants/MultiStepFormModel";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import CampaignsWrapper from "@/components/Campaigns";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;


  return (
    <>
      <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb />
      </Box>
      <Divider sx={{ mt: 2 }} />

      <Box component="div">

        <CampaignsWrapper />
      </Box>
    </>
  );
};

export default Page;
