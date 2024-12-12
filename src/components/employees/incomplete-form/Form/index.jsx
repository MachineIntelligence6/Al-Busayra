"use client";
import React, { useState } from "react";
import { Box, Divider } from "@mui/material";
import TabsComponent from "./Tabs";
import Actions from "./Actions";
import InfoIcon from "@mui/icons-material/Info";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/navigation";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import CallIcon from "@mui/icons-material/Call";
import DvrIcon from "@mui/icons-material/Dvr";
import ContentComponent from "./content";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const [formData, setFormData] = useState({
    BasicInfo: {
      fullName: "",
      gender: "",
      dob: "",
      religion: "",
      nationality: "",
      maritalStatus: "",
      employeeStatus: "",
      image: null,
    },
    ContactResidence: {
      email: "",
      phoneNumber: "",
      eContactRelation: "",
      eContactNo: "",
      country: "",
      city: "",
    },
    EmiratesId: {
      emiratesId: "",
      eidIssueDate: "",
      eidExpiryDate: "",
      eidCopyFront: null,
      eidCopyBack: null,
    },
    DrivingLicense: {
      licenseNumber: "",
      licenseIssueDate: "",
      licenseExpiryDate: "",
      licenseCopyFront: null,
      licenseCopyBack: null,
    },
    Passport: {
      passportNumber: "",
      passportIssueDate: "",
      passportExpiryDate: "",
      passportCopy: null,
    },
    Visa: {
      uaeResidencyIqamaNo: "",
      visaIssueDate: "",
      visaExpiryDate: "",
      uaeResidencyIqama: "",
      companyName: "",
      companyLocation: "",
      visaType: "",
      visaAppliedVia: "",
    },
    Insurance: {
      medicalInsurance: "",
      miStartDate: "",
      miEndDate: "",
      accidentalInsurance: "",
      aiStartDate: "",
      aiEndDate: "",
    },
    OtherDetails: {
      passportHandOver: "",
      passportTakerName: "",
      passportPicture: null,
      rtaTraining: "",
      empOwnerShip: "",
      empStatus: "",
      vendor: "",
    },
  });

  const steps = [
    {
      label: "Basic Info",
      icon1: <InfoIcon fontSize="small" />,
      icon: <ChevronRightIcon fontSize="small" />,
    },
    {
      label: "Contact/Residence",
      icon1: <CallIcon fontSize="small" />,
      icon: <ChevronRightIcon fontSize="small" />,
    },
    {
      label: "Emirates ID",
      icon1: <DvrIcon fontSize="small" />,
      icon: <ChevronRightIcon fontSize="small" />,
    },
    {
      label: "Driving License",
      icon1: <ReceiptLongOutlinedIcon fontSize="small" />,
      icon: <ChevronRightIcon fontSize="small" />,
    },
    {
      label: "Passport",
      icon1: <ArticleOutlinedIcon fontSize="small" />,
      icon: <ChevronRightIcon fontSize="small" />,
    },
    {
      label: "Visa",
      icon1: <LightbulbOutlinedIcon fontSize="small" />,
      icon: <ChevronRightIcon fontSize="small" />,
    },
    {
      label: "Insurance",
      icon1: <HealthAndSafetyOutlinedIcon fontSize="small" />,
      icon: <ChevronRightIcon fontSize="small" />,
    },
    {
      label: "Other Details",
      icon1: <PendingOutlinedIcon fontSize="small" />,
      icon: <ChevronRightIcon fontSize="small" />,
    },
  ];

  const handleNext = () =>
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));
  const handleSave = () => {
    console.log("Form Data:", formData);
    alert("Form Saved!");
    router.push("/admin/employees/incomplete-profile");
  };
  const handleCancel = () => {
    router.push("/admin/employees/incomplete-profile");
    console.log("clicked menu");
  };

  return (
    <Box sx={{ width: "100%", p: 0.5 }}>
      <TabsComponent steps={steps} activeStep={activeStep} />
      <Divider sx={{ borderColor: "#2F2B3D40", mb: 4 }} />
      <ContentComponent
        activeStep={activeStep}
        formData={formData}
        setFormData={setFormData}
      />
      <Actions
        activeStep={activeStep}
        steps={steps}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSave={handleSave}
        handleCancel={handleCancel}
      />
    </Box>
  );
};

export default MultiStepForm;
