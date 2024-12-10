"use client";

import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { vendorDetail } from "@/utils/vendor-detail";
import ModalViewCard from "./ModalViewCard";

export default function VendorDetailCard() {
  // Find the index of the object with the "Status" label
  const statusIndex = vendorDetail.findIndex((item) => item.label === "Status");

  // Split the data into two parts based on the "Status" field
  const firstPart = vendorDetail.slice(0, statusIndex + 1); // Includes "Status"
  const secondPart = vendorDetail.slice(statusIndex + 1); // Excludes "Status"

  return (
    <ModalViewCard>
      {/* Display Vendor ID as title */}
      <Grid container spacing={6}>
        {/* First column: Contains fields before and including 'Status' */}
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
                value={
                  <Box
                    sx={{
                      
                      ...(label === "Status" && {
                        backgroundColor: "#28C76F29", 
                        color: "#28C76F", 
                        padding: "2px 10px", 
                        borderRadius: "4px", 
                        fontWeight: 500, 
                        fontSize: '13px',
                        
                      }),
                    }}
                  >
                    {value}
                  </Box>
                }
              />
              {index < firstPart.length - 1 && (
                <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
              )}
            </Box>
          ))}
        </Grid>

        {/* Second column: Contains fields after 'Status' */}
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
