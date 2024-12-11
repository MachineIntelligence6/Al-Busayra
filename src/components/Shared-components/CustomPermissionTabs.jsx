import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { CustomTabPanel } from "./CustomTabPanel";
import CustomButton from "./CustomButton";

export const CustomPermissionTabs = ({
  tabData,
  onClick,
  handleChange,
  selectedTab,
  setSelectedTab,
}) => {
  // const renderTabContent = () => {
  //   // Use the selected tab index to display the appropriate content.
  //   const selectedTabContent = tabData[selectedTab]?.content;
  //   return selectedTabContent || <div>No Content Available</div>;
  // };

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1047741A",
            borderRadius: 2,
            padding: "10px",
            width: "fit-content",
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { display: "none" },
            }}
            sx={{
              "& .MuiTab-root": {
                minWidth: 150,
                textTransform: "none",
                fontWeight: "bold",
                fontSize: 14,
                borderRadius: 2,
                padding: "6px 16px",
                color: "#413E4F",
                display: "flex",
                alignItems: "center",
                gap: 1,
              },
              "& .Mui-selected": {
                backgroundColor: "#104774",
                color: "#fff",
                display: "flex",
              },
            }}
          >
            {tabData.map((tab, index) => (
              <Tab
                key={index}
                // icon={tab.icon}
                label={
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <Typography variant="body1" sx={{ color: "#fff" }}>
                      {tab.icon}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      {tab.label}
                    </Typography>
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Box>
        <Box>
          <CustomButton variant="outlined" size="small" onClick={onClick}>
            Edit
          </CustomButton>
        </Box>
      </Box>
      {/* {tabData.map((tab, index) => (
        <CustomTabPanel key={index} value={selectedTab} index={index}>
          {renderTabContent()}
        </CustomTabPanel>
      ))} */}
    </Box>
  );
};
