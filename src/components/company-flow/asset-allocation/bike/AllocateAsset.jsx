"use client";
import Dropdown from "@/app/Components/Input/Dropdown";
import Input from "@/app/Components/Input/Input";
import CustomButton from "@/components/Shared-components/CustomButton";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CustomDatePicker from "@/components/Shared-components/CustomDatePicker";
import CustomDropdown from "@/components/Shared-components/CustomDropDown";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import { Box, Typography } from "@mui/material";
import { Check, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

const AllocateAsset = () => {
  const router = useRouter();

  const inputFields = useMemo(() => {
    return [
      {
        label: "Contract Name",
        name: "fullName",
        type: "input",
      },

      {
        label: "Contract Signing Date",
        name: "contractSigningDate",
        type: "calendarInput",
      },
      {
        label: "Contract Start date",
        name: "contractStartDate",
        type: "calendarInput",
      },
      {
        label: "Contract End date",
        name: "contractEndDate",
        type: "calendarInput",
      },
      {
        label: "Contract Type",
        name: "contract",
        type: "dropdown",
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
  }, []);

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
              <Box
                key={field.name}
                sx={{ width: "calc(50% - 8px)", fontSize: "13px" }}
              >
                {field.type === "input" && (
                  <CustomTextField
                    placeholder={field.name}
                    label={field.label}
                    required
                  />
                )}
                {field.type === "dropdown" && (
                  <CustomDropdown label={field.label} />
                )}
                {field.type === "calendarInput" && (
                  <CustomDateField
                    label={field.label}
                    required
                    borderRadius={1.5}
                    height={37.5}
                    bgcolor="#FFF"
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
          onClick={() => router.push("/admin/corporate")}
        >
          Back
        </CustomButton>
        <CustomButton endIcon={<Check />} sx={buttonStyle}>
          Add
        </CustomButton>
      </Box>
    </Box>
  );
};

export default AllocateAsset;

const buttonStyle = {
  padding: "8px 20px",
  borderRadius: "6px",
  fontSize: "15px",
  fontWeight: 500,
  boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
};
