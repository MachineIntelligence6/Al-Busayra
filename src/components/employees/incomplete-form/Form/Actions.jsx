import React from "react";
import { Box, Button } from "@mui/material";
import CustomButton from "@/components/Shared-components/CustomButton";

const Actions = ({
  activeStep,
  steps,
  handleNext,
  handleBack,
  handleSave,
  handleCancel,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        mt: 2,
      }}
    >
      <Box>
        <CustomButton
          bgColor="danger"
          variant="outlined"
          sx={{
            padding: "8px 20px",
            borderRadius: "6px",
            fontSize: "15px",
            fontWeight: 500,
          }}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.00065 14.6668C4.31875 14.6668 1.33398 11.682 1.33398 8.00016C1.33398 4.31826 4.31875 1.3335 8.00065 1.3335C11.6825 1.3335 14.6673 4.31826 14.6673 8.00016C14.6673 11.682 11.6825 14.6668 8.00065 14.6668ZM8.00065 7.05736L6.11503 5.17174L5.17222 6.11454L7.05785 8.00016L5.17222 9.88576L6.11503 10.8286L8.00065 8.94296L9.88625 10.8286L10.8291 9.88576L8.94345 8.00016L10.8291 6.11454L9.88625 5.17174L8.00065 7.05736Z"
                fill="#FF4C51"
              />
            </svg>
          }
          onClick={handleCancel}
        >
          Cancel
        </CustomButton>
      </Box>
      <Box sx={{ display: "flex", gap: 2, alignContent: "center" }}>
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
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </CustomButton>
        {activeStep < steps.length - 1 ? (
          <CustomButton
            sx={{
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 500,
              boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
            }}
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
            onClick={handleNext}
          >
            Next
          </CustomButton>
        ) : (
          <CustomButton
            sx={{
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 500,
              boxShadow: "0px 2px 6px 0px rgba(115, 103, 240, 0.30)",
            }}
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
            onClick={handleSave}
          >
            Save
          </CustomButton>
        )}
      </Box>
    </Box>
  );
};

export default Actions;
