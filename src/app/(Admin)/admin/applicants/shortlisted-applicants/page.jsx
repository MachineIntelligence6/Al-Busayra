"use client";
import { useState } from "react";
import ApplicantsTableWrapper from "@/components/applicants/ApplicantsTableWrapper";
import { Box, Divider } from "@mui/material";
import GenericModal from "@/components/applicants/GenericModel";
import MultiStepFormModel from "@/components/applicants/MultiStepFormModel";
import DynamicBreadcrumb from "@/components/shared-components/BreadCrumb";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 9;

  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log("cl");
  }
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
    <Box sx={{ px: 2 }}>
    <DynamicBreadcrumb />
  </Box>
  <Divider sx={{ mt: 2 }} />
    <Box component="div">
      <GenericModal
        open={isModalOpen}
        onClose={handleCloseModal}
        title="Applicants Modal"
      >
        <MultiStepFormModel handleCloseModal={handleCloseModal} />
      </GenericModal>
      <ApplicantsTableWrapper handleOpenModal={handleOpenModal} rowsPerPage={rowsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </Box>
    </>
  );
};

export default Page;
