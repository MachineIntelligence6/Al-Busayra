"use client";
import { useEffect, useState } from "react";
import ApplicantsTableWrapper from "@/components/applicants/ApplicantsTableWrapper";
import { Box, Divider } from "@mui/material";
import GenericModal from "@/components/applicants/GenericModel";
import MultiStepFormModel from "@/components/applicants/MultiStepFormModel";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import AddIcon from '@mui/icons-material/Add';
import { usePathname } from "next/navigation";

const finalReviewTableFilters = [
  {
    id: 1,
    filterName: "Resident",
    placeholder: "Non Resident",
    inputType: "dropdown",
    // inputType: "text", // Indicates a text input field
    options: [
      { id: 14, label: "Non Resident", value: "non resident" },
      { id: 24, label: "Resident", value: "resident" },
    ],
  },
  {
    id: 2,
    filterName: "Country",
    placeholder: "UAE",
    inputType: "dropdown", // Indicates a dropdown field
    options: [
      { id: 13, label: "UAE", value: "uae" },
      { id: 23, label: "PAkistan", value: "pakistan" },
      { id: 33, label: "UK", value: "uk" },
    ],
  },
  {
    id: 3,
    filterName: "City",
    placeholder: "Sharjah",
    inputType: "dropdown",
    options: [
      { id: 12, label: "Sharjah", value: "sharjah" },
      { id: 22, label: "Dubai", value: "Dubai" },
    ],
  },
  {
    id: 4,
    filterName: "Campaign",
    placeholder: "PLease select",
    inputType: "dropdown",
    options: [
      { id: 11, label: "campaign 1", value: "campaign 1" },
      { id: 21, label: "campaign 2", value: "campaign 2" },
      { id: 31, label: "campaign 3", value: "campaign 2" },
    ],
  },
];

const Page = () => {
  const [filters, setFilters] = useState(finalReviewTableFilters);
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
      <ApplicantsTableWrapper handleOpenModal={handleOpenModal} rowsPerPage={rowsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} filters={filters}/>
    </Box>
    </>
  );
};

export default Page;
