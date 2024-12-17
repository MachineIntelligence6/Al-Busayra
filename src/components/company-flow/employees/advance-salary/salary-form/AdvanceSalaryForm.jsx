"use client";
import CustomButton from "@/components/Shared-components/CustomButton";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CustomDropdown from "@/components/Shared-components/CustomDropDown";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import { Box, Typography } from "@mui/material";
import { Check, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { LockIcon } from "@/utils/icons2";
import CurrencyType from "@/components/Shared-components/CurrencyType";

const reasonOptions = [
  { label: "Medical", value: "medical" },
  { label: "COD Deposit", value: "codDeposit" },
  { label: "Petrol", value: "petrol" },
  { label: "Room Rent & Food", value: "room rent" },
  { label: "Others", value: "others" },
];

const AdvanceSalaryFormCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/employees/advance-salary");
  };

  const inputFields = useMemo(() => {
    return [
      {
        label: "Date",
        name: "date",
        type: "CustomDateField",
      },
      {
        label: "Reason For Advance Salary",
        name: "reasonForAdvanceSalary",
        type: "dropdown",
      },

      {
        label: "Amount",
        name: "amount",
        type: "input",
        placeholder: "e.g 1200",
      },
    ];
  }, []);

  return (
    <Box>
      <Typography sx={{ color: "#4B465C", fontSize: "18px", fontWeight: 500 }}>
        Advance Salary Form
      </Typography>

      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 3, marginTop: 2 }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, flex: 1 }}>
          {inputFields?.map((field, index) => {
            return (
              <Box
                key={field.name}
                sx={{
                  width:
                    field.name === "assetType" ? "100%" : "calc(50% - 8px)",
                  fontSize: "13px",
                }}
              >
                {field.type === "input" && (
                  <CustomTextField
                    label={field.label}
                    required={true}
                    endAdornment={<CurrencyType />}
                    placeholder="e.g 1200"
                  />
                )}
                {field.type === "dropdown" && (
                  <CustomDropdown
                    label={field.label}
                    required={true}
                    options={reasonOptions}
                  />
                )}
                {field.type === "CustomDateField" && (
                  <CustomDateField
                    label={field.label}
                    required={true}
                    borderRadius={1.5}
                    height={37.5}
                    // bgcolor="#FFF"
                    textProps={{
                      fontSize: "13px",
                      marginBottom: 0.5,
                    }}
                  />
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
          // onClick={() => router.push("/admin/corporate")}
        >
          Back
        </CustomButton>
        <CustomButton
          endIcon={<Check />}
          sx={buttonStyle}
          onClick={handleClick}
        >
          Done
        </CustomButton>
      </Box>
    </Box>
  );
};

export default AdvanceSalaryFormCard;

const buttonStyle = {
  padding: "8px 20px",
  borderRadius: "6px",
  fontSize: "15px",
  fontWeight: 500,
  boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
};
