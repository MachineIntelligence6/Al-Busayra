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
} from "@mui/material";
import Input from "@/app/Components/Input/Input";
import { useFormik } from "formik";
import { YuppValSchema } from "./Schemas/YuppValSchema";
import IOSSwitch from "../ui/switch-button";

const CampaignCreateModal = ({ open, onClose }) => {
  const [isActive, setIsActive] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : '80%',
    maxWidth: "fit-content",
    maxHeight: '90vh',
    boxShadow: 24,
    borderRadius: 2,
    overflow: 'auto',
    px: 5,
    pb: 2

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
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: 2, marginLeft: 2 }}
          >
            Create Campaign
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1, marginLeft: 2 }}>
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
                <Box>
                  <Input
                    name="campaignName"
                    value={formik.values.campaignName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="e.g. winter"
                    labelText="Campaign Name"
                    layout="row"
                    customClass="justify-between items-center w-full"
                  />
                  {formik.touched.campaignName && formik.errors.campaignName && (
                    <Typography color="error" variant="body2">
                      {formik.errors.campaignName}
                    </Typography>
                  )}
                </Box>
                <Box>
                  <Input
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="2024-06-15"
                    labelText="Start Date"
                    layout="row"
                    customClass="justify-between items-center w-full"
                  />
                  {formik.touched.startDate && formik.errors.startDate && (
                    <Typography color="error" variant="body2">
                      {formik.errors.startDate}
                    </Typography>
                  )}
                </Box>
                <Box>
                  <Input
                    name="endDate"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="2024-06-18"
                    labelText="End Date"
                    layout="row"
                    customClass="justify-between items-center w-full"
                  />
                  {formik.touched.endDate && formik.errors.endDate && (
                    <Typography color="error" variant="body2">
                      {formik.errors.endDate}
                    </Typography>
                  )}
                </Box>
                <Box>
                  <Input
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Type here..."
                    labelText="Description"
                    layout="row"
                    customClass="justify-between items-center w-full"
                  />
                  {formik.touched.description && formik.errors.description && (
                    <Typography color="error" variant="body2">
                      {formik.errors.description}
                    </Typography>
                  )}
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
                  <Button variant="outlined" color="error" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={formik.handleSubmit}
                  >
                    Save
                  </Button>
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
