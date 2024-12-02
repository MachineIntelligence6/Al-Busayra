import React from "react";
import Shared from "./Shared"; // Import the reusable form component
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";

const BasicInfo = () => {
  const fields = [
    {
      label: "Full Name As per Emirates ID",
      name: "fullName",
      component: Input,
    },
    {
      label: "Gender",
      name: "gender",
      component: Dropdown,
      options: ["Male", "Female", "Other"],
    },
    {
      label: "Date of Birth",
      name: "dob",
      component: Input,
    },
    {
      label: "Religion",
      name: "religion",
      component: Dropdown,
      options: ["Islam", "Christianity", "Hinduism", "Other"],
    },
    {
      label: "Nationality",
      name: "nationality",
      component: Dropdown,
      options: ["UAE", "India", "USA", "Other"],
    },
    {
      label: "Marital Status",
      name: "maritalStatus",
      component: Dropdown,
      options: ["Single", "Married", "Divorced"],
    },
    {
      label: "Employment Type",
      name: "employmentType",
      component: Dropdown,
      options: ["Employed", "Self-Employed", "Unemployed"],
    },
  ];

  const handleSubmit = (formData) => {
    console.log("Form Submitted with Data:", formData);
  };

  const handleCancel = () => {
    console.log("Form Cancelled");
  };

  return (
    <Shared
      fields={fields}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      initialValues={{
        fullName: "",
        gender: "",
        dob: "",
        religion: "",
        nationality: "",
        maritalStatus: "",
        employmentType: "",
      }}
    />
  );
};

export default BasicInfo;
