import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const TabsComponent = ({ steps, activeStep }) => {
  return (
    <Tabs value={activeStep} indicatorColor="transparent" sx={{ marginTop: 1 }}>
      {steps.map((step, index) => (
        <Tab
          key={index}
          label={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor:
                    activeStep === index ? "#104774" : "#1047741A",
                  padding: "5px",
                  borderRadius: "6px",
                  color: activeStep === index ? "white" : "#104774",
                }}
              >
                {step.icon1}
              </Box>
              {step.label}
              {step.icon}
            </Box>
          }
          sx={{ textTransform: "none" }}
        />
      ))}
    </Tabs>
  );
};

export default TabsComponent;
