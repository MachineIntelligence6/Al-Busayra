import React from "react";
import { Box, Tabs, Tab } from "@mui/material";

const CustomTabs = ({ tabs, activeTab, handleTabChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={activeTab} onChange={handleTabChange} aria-label="custom tabs">
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} />
        ))}
      </Tabs>
    </Box>
  );
};

export default CustomTabs;
