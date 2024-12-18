"use client";
import CustomButton from "@/components/Shared-components/CustomButton";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import { Box, Typography } from "@mui/material";
import { Check, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
import CustomDropdown from "@/components/Shared-components/CustomDropDown";

// const bikeOptions = [
//   { label: "Asset is cleared ", value: "assetIscleared" },
//   { label: "Asset is lost", value: "assetIslost" },
// ];

const PassportAcceptanceForm = () => {
  const router = useRouter();

  const inputFields = useMemo(() => {
    return [
      {
        label: "Submission Date",
        name: "passportReturnDate",
        type: "datefield",
      },
      {
        label: "Passport Handed Over To",
        name: "passportHandOverTo",
        type: "dropdown",
        placeholder: "e.g any",
      },
      {
        label: "Upload Evidence",
        name: "uploadEvidence",
        type: "file-upload",
        placeholder: "Upload Picture",
      },
    ];
  }, []);

  return (
    <Box>
      <Typography sx={{ color: "#4B465C", fontSize: "18px", fontWeight: 500 }}>
        Passport Temp Return Request Form
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
                    field.name === "commentsRemarks"
                      ? "100%"
                      : "calc(50% - 8px)",
                  fontSize: "13px",
                }}
              >
                {field.type === "datefield" && (
                  <CustomDateField label={field.label} required={true} />
                )}
                {field.type === "dropdown" && (
                  <CustomDropdown
                    label={field.label}
                    required={true}
                    // options={bikeOptions}
                  />
                )}

                {field.type === "file-upload" && (
                  <CustomFileUploadField
                    label={field.label}
                    required={true}
                    placeholder={field.placeholder}
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
          startIcon={<MoveLeft size={16} />}
          onClick={() =>
            router.push("/employees/passport-acceptance?table=false")
          }
        >
          Back
        </CustomButton>
        <CustomButton
          endIcon={<Check size={16} />}
          sx={buttonStyle}
          onClick={() =>
            router.push("/employees/passport-acceptance?table=true")
          }
        >
          Done
        </CustomButton>
      </Box>
    </Box>
  );
};

export default PassportAcceptanceForm;

const buttonStyle = {
  padding: "8px 20px",
  borderRadius: "6px",
  fontSize: "15px",
  fontWeight: 500,
  boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
};
