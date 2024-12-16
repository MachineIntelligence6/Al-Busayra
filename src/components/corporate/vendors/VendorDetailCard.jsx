"use client";

import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";
import { Box, Divider } from "@mui/material";
import { vendorDetail } from "@/utils/vendor-detail";

export default function VendorDetailCard() {
  // Dynamically split the data into two equal parts
  const midIndex = Math.ceil(vendorDetail.length / 2);
  const firstPart = vendorDetail.slice(0, midIndex);
  const secondPart = vendorDetail.slice(midIndex);

  return (
    <ViewCard borderTop={false} onEdit={false}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {/* First column */}
        <Box sx={{ flex: 1, minWidth: "300px" }}>
          {firstPart.map(({ label, value, icon }, index) => (
            <Box key={label}>
              <ViewItem
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {icon && (
                      <Box sx={{ width: "25px", height: "25px" }}>{icon}</Box>
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
                        fontSize: "13px",
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
        </Box>

        {/* Second column */}
        <Box sx={{ flex: 1, minWidth: "300px" }}>
          {secondPart.map(({ label, value, icon }, index) => (
            <Box key={label}>
              <ViewItem
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {icon && (
                      <Box sx={{ width: "25px", height: "25px" }}>{icon}</Box>
                    )}
                    <span>{label}</span>
                  </Box>
                }
                value={<Box>{value}</Box>}
              />
              {index < secondPart.length - 1 && (
                <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </ViewCard>
  );
}
