"use client";

import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { platformDetail } from "@/utils/vendor-detail";
import ModalViewCard from "./ModalViewCard";

export default function PlatformDetailCard() {
  // Find the index of the object with the "POC Phone Number" label
  const pocPhoneNumberIndex = platformDetail.findIndex(
    (item) => item.label === "POC Phone Number"
  );

  // Split the data into two parts: before and including "POC Phone Number", and after
  const firstPart = platformDetail.slice(0, pocPhoneNumberIndex + 1); // Includes "POC Phone Number"
  const secondPart = platformDetail.slice(pocPhoneNumberIndex + 1); // After "POC Phone Number"

  return (
    <ModalViewCard>
      {/* Display Vendor ID as title */}
      <Grid container spacing={6}>
        {/* First column: Contains fields before and including 'POC Phone Number' */}
        <Grid item xs={12} sm={6}>
          {firstPart.map(({ label, value, icon }, index) => (
            <Box key={label}>
              <ViewItem
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {/* Render SVG icon if it exists */}
                    {icon && (
                      <Box
                        sx={{
                          width: "25px",
                          height: "25px",
                          "& svg": {
                            width: "100%",
                            height: "100%",
                          },
                        }}
                        dangerouslySetInnerHTML={{ __html: icon }}
                      />
                    )}
                    <span>{label}</span>
                  </Box>
                }
                value={<Box>{value}</Box>}
              />
              {index < firstPart.length - 1 && (
                <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
              )}
            </Box>
          ))}
        </Grid>

        {/* Second column: Contains fields after 'POC Phone Number' */}
        <Grid item xs={12} sm={6}>
          {secondPart.map(({ label, value, icon }, index) => (
            <Box key={label}>
              <ViewItem
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {/* Render SVG icon if it exists */}
                    {icon && (
                      <Box
                        sx={{
                          width: "25px",
                          height: "25px",
                          "& svg": {
                            width: "100%",
                            height: "100%",
                          },
                        }}
                        dangerouslySetInnerHTML={{ __html: icon }}
                      />
                    )}
                    <span>{label}</span>
                  </Box>
                }
                value={
                  <Box
                    sx={{
                      // Apply the styles conditionally based on the "Status" label
                      ...(label === "Status" && {
                        backgroundColor: "#28C76F29", // Light green background
                        color: "#28C76F", // Dark green text color
                        padding: "2px 10px", // Padding around the text
                        borderRadius: "4px", // Optional: rounded corners for styling
                        fontWeight: 500, // Optional: make the text bold
                        fontSize: "13px",
                      }),
                    }}
                  >
                    {value}
                  </Box>
                }
              />
              {index < secondPart.length - 1 && (
                <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
              )}
            </Box>
          ))}
        </Grid>
      </Grid>
    </ModalViewCard>
  );
}
