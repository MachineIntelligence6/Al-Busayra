"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CallIcon from "@mui/icons-material/Call";
import DvrIcon from "@mui/icons-material/Dvr";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import ContactResidence from "./ContactResidence";
import EmiratesId from "./EmiratesId";
import DrivingLicense from "./DrivingLicense";
import Passport from "./Passport";
import Visa from "./Visa";
import Insurance from "./Insurance";
import OtherDetails from "./OtherDetails";
import CustomButton from "@/components/Shared-components/CustomButton";
import { Divider } from "@mui/material";

// Custom Tab Panel
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Tab Data
const tabs = [
  {
    label: "Basic Info",
    icon: <InfoIcon fontSize="small" />,
    content: <BasicInfo />,
  },
  {
    label: "Contact/Residence",
    icon: <CallIcon fontSize="small" />,
    content: <ContactResidence />,
  },
  {
    label: "Emirates ID",
    icon: <DvrIcon fontSize="small" />,
    content: <EmiratesId />,
  },
  {
    label: "Driving License",
    icon: <InfoIcon fontSize="small" />,
    content: <DrivingLicense />,
  },
  {
    label: "Passport",
    icon: <CallIcon fontSize="small" />,
    content: <Passport />,
  },
  {
    label: "Visa",
    icon: <DvrIcon fontSize="small" />,
    content: <Visa />,
  },
  {
    label: "Insurance",
    icon: <InfoIcon fontSize="small" />,
    content: <Insurance />,
  },
  {
    label: "Other Details",
    icon: <CallIcon fontSize="small" />,
    content: <OtherDetails />,
  },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabIndex() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: 1 }}>
      <Box sx={{ borderBottom: 1, borderColor: "#2F2B3D40" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="custom tabs example"
          indicatorColor="transparent"
          textColor="#2F2B3DE5"
          sx={{ marginBottom: 2 }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        value === index ? "#104774" : "#1047741A",
                      padding: "5px",
                      borderRadius: "6px",
                    }}
                  >
                    <Box
                      sx={{
                        color: value === index ? "white" : "#104774",
                        fontSize: 5,
                      }}
                    >
                      {tab.icon}
                    </Box>
                  </Box>
                  {tab.label}
                  <ChevronRightIcon fontSize="small" />
                </Box>
              }
              {...a11yProps(index)}
              sx={{ textTransform: "none" }}
            />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          <Box>{tab.content}</Box>
          <Divider sx={{ borderColor: "#2F2B3D40", mt: 6, mb: 3 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <CustomButton
              bgColor="danger"
              variant="outlined"
              sx={{
                padding:
                  "var(--Padding-padding-2, 8px) var(--Padding-padding-5, 20px)",
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
            >
              Cancel
            </CustomButton>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CustomButton
                bgColor="secondary"
                sx={{
                  padding:
                    "var(--Padding-padding-2, 8px) var(--Padding-padding-5, 20px)",
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.83325 8.5L7.83325 12.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.83325 8.5L7.83325 4.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              >
                Back
              </CustomButton>
              <CustomButton
                sx={{
                  padding:
                    "var(--Padding-padding-2, 8px) var(--Padding-padding-5, 20px)",
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
              >
                Next
              </CustomButton>
            </Box>
          </Box>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
