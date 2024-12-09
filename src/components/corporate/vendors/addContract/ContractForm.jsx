import Dropdown from "@/app/Components/Input/Dropdown";
import Input from "@/app/Components/Input/Input";
import CustomButton from "@/components/Shared-components/CustomButton";
import { Box, Typography } from "@mui/material";
import React from "react";

const ContractForm = () => {
  const inputFields = [
    {
      label: "Full Name As per Emirates ID",
      name: "fullName",
      component: Input,
    },
    {
      label: "Contract Type",
      name: "contract",
      component: Dropdown,
      options: ["Rider", "Asset", "Other"],
    },
    {
      label: "Contract name",
      name: "contractName",
      component: Input,
    },
    {
      label: "Contract Signing Date",
      name: "contractSigningDate",
      component: Input,
    },
    {
      label: "Contract Start date",
      name: "contractStartDate",
      component: Input,
    },
    {
      label: "Contract End date",
      name: "contractEndDate",
      component: Input,
    },
    {
      label: "Fixed Amount (Rider)",
      name: "fixedAmount",
      component: Input,
    },
    {
      label: "Commission Amount",
      name: "commissionAmount",
      component: Input,
    },
    {
      label: "Charges",
      name: "charges",
      component: Input,
    },
    {
      label: "Active/Close",
      component: "activeClose",
      options: ["Active", "Close"],
    },
  ];

  return (
    <Box>
      <Typography sx={{ color: "#4B465C", fontSize: "18px", fontWeight: 500 }}>
        Contract Form
      </Typography>

      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 2 }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {inputFields.map((field, index) => (
            <Box key={index} sx={{ width: "calc(33% - 8px)" }}>
              {field.component === Input ? (
                <Input
                  labelText={field.label}
                  customClass="w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                  name={field.name}
                  //   value={formData[field.name]}
                  //   onChange={handleInputChange}
                />
              ) : (
                <Dropdown
                  labelText={field.label}
                  customClass="w-full gap-[1px] text-[13px] text-[#2F2B3DE5]"
                  name={field.name}
                  //   value={formData[field.name]}
                  //   onChange={handleInputChange}
                  options={[
                    { label: "Select an option", value: "" },
                    ...field.options.map((option) => ({
                      label: option,
                      value: option,
                    })),
                  ]}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}
      >
        <CustomButton
          bgColor="secondary"
          sx={{
            padding: "8px 20px",
            borderRadius: "6px",
            fontSize: "15px",
            fontWeight: 500,
            boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
          }}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M3.83325 8.49984H13.1666"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.83325 8.5L7.83325 12.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.83325 8.5L7.83325 4.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          Back
        </CustomButton>
        <CustomButton
          endIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.33398 7.99984L6.66732 11.3332L13.334 4.6665"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          sx={{
            padding: "8px 20px",
            borderRadius: "6px",
            fontSize: "15px",
            fontWeight: 500,
            boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
          }}
        >
          Add
        </CustomButton>
      </Box>
    </Box>
  );
};

export default ContractForm;
