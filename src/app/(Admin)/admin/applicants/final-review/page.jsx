"use client";
import { useEffect, useState } from "react";
import ApplicantsTableWrapper from "@/components/applicants/ApplicantsTableWrapper";
import { Box, Divider } from "@mui/material";
import GenericModal from "@/components/applicants/GenericModel";
import MultiStepFormModel from "@/components/applicants/MultiStepFormModel";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import AddIcon from '@mui/icons-material/Add';
import { usePathname } from "next/navigation";

const Page = () => {
  const [isBtnShow, setIsBtnShow] = useState(false);
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; 

  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log("cl");
}
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(()=> {
    if (pathname.includes("/applicants/final-review")) {
      setIsBtnShow(true);
    }
      },[pathname])

  return (
    <>
    <Box sx={{ px: 2 }}>
    <DynamicBreadcrumb isBtnShow={isBtnShow} icon={<AddIcon/>} setIsModalOpen={setIsModalOpen} onClick={handleOpenModal}/>
  </Box>
  <Divider sx={{ mt: 2 }} />
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
    </>
  );
};

export default Page;
