"use client";
import Dropdown from "@/app/Components/Input/Dropdown";
import Input from "@/app/Components/Input/Input";
import CustomButton from "@/components/Shared-components/CustomButton";
import CustomDropdown from "@/components/Shared-components/CustomDropDown";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import { Box, Typography } from "@mui/material";
import { Check, MoveLeft } from "lucide-react";
import React from "react";

const ContractForm = () => {
  const inputFields = [
    {
      label: "Full Name As per Emirates ID",
      name: "fullName",
      type: "input",
    },
    {
      label: "Contract Type",
      name: "contract",
      type: "dropdown",
    },
    {
      label: "Contract name",
      name: "contractName",
      type: "input",
    },
    {
      label: "Contract Signing Date",
      name: "contractSigningDate",
      type: "input",
    },
    {
      label: "Contract Start date",
      name: "contractStartDate",
      type: "input",
    },
    {
      label: "Contract End date",
      name: "contractEndDate",
      type: "input",
    },
    {
      label: "Fixed Amount (Rider)",
      name: "fixedAmount",
      type: "input",
    },
    {
      label: "Commission Amount",
      name: "commissionAmount",
      type: "input",
    },
    {
      label: "Charges",
      name: "charges",
      type: "input",
    },
    {
      label: "Active/Close",
      name: "Active/Close",
      type: "dropdown",
    },
  ];

  return (
    <Box>
      <Typography sx={{ color: "#4B465C", fontSize: "18px", fontWeight: 500 }}>
        Contract Form
      </Typography>

      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 3, marginTop: 2 }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, flex: 1 }}>
          {inputFields?.map((field, index) => {
            return (
              <Box key={field.name} sx={{ width: "calc(33% - 8px)" }}>
                {field.type === "input" && (
                  <CustomTextField
                    placeholder={field.name}
                    label={field.label}
                  />
                )}
                {field.type === "dropdown" && (
                  <CustomDropdown label={field.label} />
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}
      >
        <CustomButton
          bgColor="secondary"
          sx={buttonStyle}
          startIcon={<MoveLeft />}
        >
          Back
        </CustomButton>
        <CustomButton
          endIcon={<Check />}
          sx={buttonStyle}
        >
          Add
        </CustomButton>
      </Box>
    </Box>
  );
};

export default ContractForm;

const buttonStyle = {
  padding: "8px 20px",
  borderRadius: "6px",
  fontSize: "15px",
  fontWeight: 500,
  boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
}
