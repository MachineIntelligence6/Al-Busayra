// components/Shared-components/RoleInfoCard.tsx

import React from "react";
import { Box } from "@mui/material";
import { InfoCard, InfoItem } from "@/components/Shared-components/CustomInfoCard";

const RoleInfoCard = ({ title, data, onEdit }) => {
  // Split data into two groups to display in two columns
  const half = Math.ceil(data.length / 2);
  const firstColumnData = data.slice(0, half);
  const secondColumnData = data.slice(half);

  // Custom styles for "Administrator" and "Status"
  const customStyles = {
    administratorStyle: {
        backgroundColor:'#E5F8E5',
        color:'#00A000',
      padding: "4px 12px",
      borderRadius: "6px",
    },
    statusStyle: {
     backgroundColor:'#E5F8E5',
     color:'#00A000',
      padding: "4px 12px",
      borderRadius: "6px",
    //   marginBotton:"30px"
    },
  };

  return (
    <InfoCard title={title} onEdit={onEdit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box sx={{ width: "48%" }}>
          {firstColumnData.map((item, index) => (
            <InfoItem
              key={index}
              label={
                <>
                  {item.icon} {item.label}
                </>
              }
              value={
                item.label === "Role" ? (
                  <span style={customStyles.administratorStyle}>{item.value}</span>
                ) : (
                  item.value
                )
              }
              sx={item.valueStyle || {}}
            />
          ))}
        </Box>
        <Box sx={{ width: "48%" }}>
          {secondColumnData.map((item, index) => (
            <InfoItem
              key={index}
              label={
                <>
                  {item.icon} {item.label}
                </>
              }
              value={
                item.label === "Status" ? (
                  <span style={customStyles.statusStyle}>{item.value}</span>
                ) : (
                  item.value
                )
              }
              sx={item.valueStyle || {}}
            />
          ))}
        </Box>
      </Box>
    </InfoCard>
  );
};

export default RoleInfoCard;
