"use client";
import CustomButton from "@/components/Shared-components/CustomButton";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CustomDropdown from "@/components/Shared-components/CustomDropDown";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import { Box, Typography } from "@mui/material";
import { Check, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import SimAssignedModal from "./SimAssignedModal";

const SimAssignForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const onClose = () => {
    setShowPopup(false);
  };
  const router = useRouter();

  const inputFields = useMemo(() => {
    return [
      {
        label: "Asset Type",
        name: "assetType",
        type: "dropdown",
      },

      {
        label: "Number",
        name: "simNumber",
        type: "dropdown",
      },
      {
        label: "Sim Operator",
        name: "simOperator",
        type: "dropdown",
      },

      {
        label: "Date Of Sim Issue",
        name: "dateOfSimIssue",
        type: "CustomDateField",
      },
      {
        label: "Time Of Sim Issue",
        name: "timeOfSimIssue",
        type: "input",
      },
    ];
  }, []);
  return (
    <Box>
      <Typography sx={{ color: "#4B465C", fontSize: "18px", fontWeight: 500 }}>
        Allocate Asset
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
                    placeholder={field.name}
                    label={field.label}
                    required
                  />
                )}
                {field.type === "dropdown" && (
                  <CustomDropdown label={field.label} />
                )}
                {field.type === "CustomDateField" && (
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
          // onClick={() => router.push("/admin/corporate")}
        >
          Back
        </CustomButton>
        <CustomButton
          endIcon={<Check />}
          sx={buttonStyle}
          onClick={() => setShowPopup(true)}
        >
          Allocate
        </CustomButton>
      </Box>
      {showPopup && <SimAssignedModal onClose={onClose} />}
    </Box>
  );
};

export default SimAssignForm;

const buttonStyle = {
  padding: "8px 20px",
  borderRadius: "6px",
  fontSize: "15px",
  fontWeight: 500,
  boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
};
