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
import BasicInfo from "@/components/Shared-components/IncompleteProfileForm/BasicInfo";
import ContactResidence from "@/components/Shared-components/IncompleteProfileForm/ContactResidence";

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
    icon: <InfoIcon />,
    content: <BasicInfo />,
  },
  {
    label: "Contact/Residence",
    icon: <CallIcon />,
    content: <ContactResidence />,
  },
  {
    label: "Emirates ID",
    icon: <DvrIcon />,
    content: "Emirates ID Content",
  },
  {
    label: "Driving License",
    icon: <InfoIcon />,
    content: "Driving License Content",
  },
  {
    label: "Passport",
    icon: <CallIcon />,
    content: "Passport Content",
  },
  {
    label: "Visa",
    icon: <DvrIcon />,
    content: "Visa Content",
  },
  {
    label: "Insurance",
    icon: <InfoIcon />,
    content: "Insurance Content",
  },
  {
    label: "Other Details",
    icon: <CallIcon />,
    content: "Other Details Content",
  },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "#2F2B3D40" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="custom tabs example"
          indicatorColor="transparent" // Removes the blue active line
          textColor="#2F2B3DE5" // Ensures the text color remains constant
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
                    fontSize: 15,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        value === index ? "#104774" : "#1047741A", // Active vs Inactive BG
                      padding: "5px",
                      borderRadius: "6px",
                      marginRight: 1,
                    }}
                  >
                    <Box
                      sx={{
                        color: value === index ? "white" : "#104774", // Active vs Inactive icon color
                        fontSize: 5,
                      }}
                    >
                      {tab.icon}
                    </Box>
                  </Box>
                  {tab.label}
                  <ChevronRightIcon sx={{}} />
                </Box>
              }
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
