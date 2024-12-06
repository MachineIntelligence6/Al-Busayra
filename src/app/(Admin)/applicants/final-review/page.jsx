"use client";
import { useState } from "react";
import ApplicantsTableWrapper from "@/components/applicants/ApplicantsTableWrapper";
import { Box } from "@mui/material";
import GenericModal from "@/components/applicants/GenericModel";
import MultiStepFormModel from "@/components/applicants/MultiStepFormModel";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; 

  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log("cl");
}
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Box component="div">
      <GenericModal
        open={isModalOpen}
        onClose={handleCloseModal}
        title="Applicants Modal"
      >
        <MultiStepFormModel  handleCloseModal={handleCloseModal} />
      </GenericModal>
      <ApplicantsTableWrapper handleOpenModal={handleOpenModal} rowsPerPage={rowsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </Box>
  );
};

export default Page;
