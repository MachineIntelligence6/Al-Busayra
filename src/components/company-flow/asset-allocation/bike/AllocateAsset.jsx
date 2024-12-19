"use client";
import CustomButton from "@/components/shared-components/CustomButton";
import CustomDateField from "@/components/shared-components/CustomDateField";
import CustomDropdown from "@/components/shared-components/CustomDropDown";
import CustomFileUploadField from "@/components/shared-components/CustomFIleUploadField";
import CustomTextField from "@/components/shared-components/CustomTextField";
import { Box, Typography } from "@mui/material";
import { Check, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import BikeAssignedModal from "./BikeAssignedModal";
import { LockIcon } from "@/utils/icons2";

const AllocateAsset = () => {
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
        label: "Bike Plate No",
        name: "bikePlateNo",
        type: "dropdown",
      },
      {
        label: "Bike City",
        name: "bikeCity",
        type: "input",
        placeholder: "Sharjah",
        endAdornment: <LockIcon />,
      },
      {
        label: "Bike Ownership",
        name: "BikeOwnership",
        type: "input",
        placeholder: "ABDS",
        startAdornment: (
          <img
            src="/company/ABDS.svg"
            alt="Logo"
            style={{ width: 30, height: 30 }}
          />
        ),
        endAdornment: <LockIcon />,
      },
      {
        label: "Date Of Bike Issue",
        name: "dateOfBikeIssue",
        type: "CustomDateField",
      },
      {
        label: "Time Of Bike Issue",
        name: "timeOfBikeIssue",
        type: "CustomDateField",
      },
      {
        label: "Food Permit provided to Rider",
        name: "foodPermit",
        type: "dropdown",
      },
      {
        label: "Mulkiya provided to Rider",
        name: "mulkiya",
        type: "dropdown",
      },
      {
        label: "Picture of physical allocation to Rider",
        name: "physicalAllocationCopy",
        type: "CustomFileUploadField",
      },
      {
        label: "Acceptance letter",
        name: "acceptanceLetter",
        type: "CustomFileUploadField",
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
                    label={field.label}
                    required={true}
                  />
                )}
                {field.type === "dropdown" && (
                  <CustomDropdown label={field.label} />
                )}
                {field.type === "CustomDateField" && (
                  <CustomDateField
                    label={field.label}
                    required={true}
                    borderRadius={1.5}
                    height={37.5}
                    bgcolor="#FFF"
                    textProps={{
                      fontSize: "13px",
                      marginBottom: 0.5,
                    }}
                  />
                )}

                {field.type === "CustomFileUploadField" && (
                  <CustomFileUploadField
                    label={field.label}
                    // value={formData[field.name]}
                    height={36.5}
                    borderRadius={5}
                    bgColor="#FFFFFF"
                    textSize="13px"
                    marginBottom="4px"
                    required={true}
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
      {showPopup && <BikeAssignedModal onClose={onClose} />}
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
