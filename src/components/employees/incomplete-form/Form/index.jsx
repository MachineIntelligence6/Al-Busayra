"use client";

import * as React from "react";
import { Box, Tabs, Tab, Divider } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CallIcon from "@mui/icons-material/Call";
import DvrIcon from "@mui/icons-material/Dvr";
import BasicInfo from "./content/BasicInfo";
import ContactResidence from "./content/ContactResidence";
import EmiratesId from "./content/EmiratesId";
import DrivingLicense from "./content/DrivingLicense";
import Passport from "./content/Passport";
import Visa from "./content/Visa";
import Insurance from "./content/Insurance";
import OtherDetails from "./content/OtherDetails";
import Action from "./Action";

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
  { label: "Visa", icon: <DvrIcon fontSize="small" />, content: <Visa /> },
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
          <Action setValue={setValue} currentTab={value} />{" "}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
