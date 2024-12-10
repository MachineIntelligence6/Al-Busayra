"use client";

import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Switch,
  FormControlLabel,
  Modal,
  useTheme,
  useMediaQuery,
  TextareaAutosize,
} from "@mui/material";
import Input from "@/app/Components/Input/Input";
import { useFormik } from "formik";
import { YuppValSchema } from "./Schemas/YuppValSchema";
import IOSSwitch from "../ui/switch-button";
import CustomButton from "./CustomButton";

const CampaignCreateModal = ({ open, onClose }) => {
  const [isActive, setIsActive] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "80%",
    maxWidth: "fit-content",
    maxHeight: "90vh",
    boxShadow: 24,
    borderRadius: 2,
    overflow: "auto",
    px: 5,
    pb: 2,
  };

  const formik = useFormik({
    initialValues: {
      campaignName: "",
      startDate: "",
      endDate: "",
      description: "",
    },
    validationSchema: YuppValSchema(),
    onSubmit: (values) => {
      console.log("Form data", values);
      onClose();
    },
  });

  return (
    <Modal open={open}>
      <Box component="div" sx={{ ...modalStyle }}>
        <Card
          sx={{
            minWidth: "800px",
            padding: 3,
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: 1,
              marginLeft: 2,
              color: "#000000",
              fontSize: "20px",
            }}
          >
            Create Campaign
          </Typography>
          <Typography
            sx={{
              marginBottom: 1,
              marginLeft: 2,
              color: "#2F2B3D66",
              fontSize: "16px",
            }}
          >
            Fill out the following form to add a new campaign.
          </Typography>
          <CardContent sx={{ marginTop: 6 }}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#2F2B3DE5",
                        fontWeight: 550,
                      }}
                    >
                      Campaign Name <span className="text-[#E64449]">*</span>{" "}
                    </Typography>
                    <Input
                      name="campaignName"
                      value={formik.values.campaignName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="e.g. winter"
                      labelText=""
                      layout="row"
                      customClass=" w-[60%]  text-[13px]  text-[#2F2B3DE5]"
                      customInputClass="bg-[#FCFCFC]"
                    />
                  </Box>
                  <Box sx={{ alignSelf: "end", mt: 1 }}>
                    {formik.touched.campaignName &&
                      formik.errors.campaignName && (
                        <Typography color="error" variant="body2">
                          {formik.errors.campaignName}
                        </Typography>
                      )}
                  </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#2F2B3DE5",
                        fontWeight: 550,
                      }}
                    >
                      Start Date <span className="text-[#E64449]">*</span>{" "}
                    </Typography>
                    <Input
                      name="startDate"
                      value={formik.values.startDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="2024-06-15"
                      labelText=""
                      layout="row"
                      customClass="w-[60%]  text-[13px]  text-[#2F2B3DE5]"
                      customInputClass="bg-[#FCFCFC]"
                    />
                  </Box>
                  <Box sx={{ alignSelf: "end", mt: 1 }}>
                    {formik.touched.startDate && formik.errors.startDate && (
                      <Typography color="error" variant="body2">
                        {formik.errors.startDate}
                      </Typography>
                    )}
                  </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#2F2B3DE5",
                        fontWeight: 550,
                      }}
                    >
                      End Date <span className="text-[#E64449]">*</span>{" "}
                    </Typography>
                    <Input
                      name="endDate"
                      value={formik.values.endDate}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="2024-06-18"
                      labelText=""
                      layout="row"
                      customClass="w-[60%]  text-[13px]  text-[#2F2B3DE5] "
                      customInputClass="bg-[#FCFCFC]"
                    />
                  </Box>
                  <Box sx={{ alignSelf: "end", mt: 1 }}>
                    {formik.touched.endDate && formik.errors.endDate && (
                      <Typography color="error" variant="body2">
                        {formik.errors.endDate}
                      </Typography>
                    )}
                  </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "#2F2B3DE5",
                        fontWeight: 550,
                      }}
                    >
                      Description <span className="text-[#E64449]">*</span>
                    </Typography>
                    <TextareaAutosize
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Type here..."
                      minRows={1}
                      maxRows={1}
                      sx={{}}
                      style={{
                        width: "60%",
                        height: "90px",
                        padding: "10px",
                        fontSize: "13px",
                        color: "#2F2B3DE5",
                        border: "1px solid #2F2B3D40",
                        borderRadius: "6px",
                        outline: "none",
                        resize: "none",
                        backgroundColor: "#FCFCFC",
                      }}
                    />
                  </Box>
                  <Box sx={{ alignSelf: "end", mt: 1 }}>
                    {formik.touched.description &&
                      formik.errors.description && (
                        <Typography color="error" variant="body2">
                          {formik.errors.description}
                        </Typography>
                      )}
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 2,
                }}
              >
                <FormControlLabel
                  control={
                    <IOSSwitch
                      sx={{ m: 1 }}
                      defaultChecked
                      onChange={() => setIsActive(!isActive)}
                    />
                  }
                  label={`Campaign Status: ${isActive ? "Active" : "Inactive"}`}
                  sx={{ marginTop: 2, marginBottom: 3 }}
                />
                <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                  <CustomButton
                    variant="outlined"
                    bgColor="danger"
                    onClick={onClose}
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
                  >
                    Cancel
                  </CustomButton>
                  <CustomButton
                    variant="contained"
                    color="primary"
                    onClick={formik.handleSubmit}
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
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    }
                  >
                    Save
                  </CustomButton>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default CampaignCreateModal;
