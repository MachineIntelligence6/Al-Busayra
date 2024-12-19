"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControlLabel,
  Modal,
  useTheme,
  useMediaQuery,
  TextareaAutosize,
  Divider,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { YuppValSchema } from "./Schemas/YuppValSchema";
import IOSSwitch from "../ui/switch-button";
import CustomButton from "./CustomButton";
import CustomDateField from "./CustomDateField";
import DescriptiveText from "./DescriptiveText";
import CaptionText from "./CaptionText";
import DialogHeading from "./DialogHeading";
import { custom } from "@/app/theme";
import { Check, CircleX } from "lucide-react";

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
    boxShadow: 24,
    borderRadius: 2,
    overflow: "auto",

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
            py: 3,
            px: 3,
            borderRadius: 2,
          }}
        >
          <DialogHeading text="Create Campaign" />
          <CaptionText text=" Fill out the following form to add a new campaign." required={false} color={custom.muted} />

          <CardContent sx={{ py: 6, px: 0 }}>
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
                  py: 3.5
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <CaptionText text="Campaign Name" />
                    <TextField
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

                    <CaptionText text="Start Datetime" />
                    <Box sx={{ width: "60%" }}>
                      <CustomDateField
                        height={38}
                        sx={{ bgcolor: "#FCFCFC" }}
                        name="startDate"
                        value={formik.values.startDate || ""}
                        onChange={(e) =>
                          formik.setFieldValue("startDate", e.target.value)
                        }
                        onBlur={formik.handleBlur}
                      />
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between", }}
                  >
                    <CaptionText text="End Datetime" />
                    <Box sx={{ width: "60%" }}>
                      <CustomDateField
                        placeholder="Date"
                        height={38}
                        sx={{ bgcolor: "#FCFCFC" }}
                        name="endDate"
                        value={formik.values.endDate || ""}
                        onChange={(e) =>
                          formik.setFieldValue("endDate", e.target.value)
                        }
                        onBlur={formik.handleBlur}
                      />
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <CaptionText text="Description" />

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
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <DescriptiveText text="Campaign Status:"
                    fontSize={16}
                    fontWeight={500}
                    color={custom.primaryText}
                  />
                  <FormControlLabel
                    control={
                      <IOSSwitch
                        sx={{ ml: 2, }}
                        defaultChecked
                        onChange={() => setIsActive(!isActive)}
                      />
                    }
                  />
                  <Typography>{` ${isActive ? "Active" : "Inactive"}`}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 3, alignItems: "center", }}>
                  <CustomButton
                    variant="outlined"
                    bgColor="danger"
                    onClick={onClose}
                    sx={{ px: 3, py: 0.4 }}
                    startIcon={
                      <CircleX size={15} />
                    }
                  >
                    Cancel
                  </CustomButton>
                  <CustomButton
                    variant="contained"
                    color="primary"
                    onClick={formik.handleSubmit}
                    endIcon={<Check size={15} />}
                    sx={{ px: 3, py: 0.5 }}
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
