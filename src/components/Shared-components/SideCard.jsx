import React from "react";
import { Box, Avatar, Typography, Divider } from "@mui/material";

const SideCard = ({ avatarSrc, name, email, contractData }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "400px",
          bgcolor: "#062A47",
          boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
          borderRadius: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          color: "#F2F2F2",
          border: "2px solid #F2F2F2",
        }}
      >
        {/* Profile section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: "18px",
          }}
        >
          <Avatar
            src={avatarSrc}
            sx={{
              width: 70,
              height: 70,
              border: "2px solid white",
              borderRadius: "50%",
            }}
          />
          <Box>
            <Typography>{name}</Typography>
            <Typography>{email}</Typography>
          </Box>
        </Box>

        <Divider color="white" />

        {/* Contract Data */}
        {contractData.map((item, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "6px 24px",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.70)",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.90)",
                  fontSize: "13px",
                  fontWeight: 500,
                  ...(item.label === "Status" && {
                    backgroundColor: "#28C76F",
                    color: "#F2F2F2",
                    padding: "2px 10px",
                    borderRadius: "4px",
                    fontWeight: 500,
                  }),
                }}
              >
                {item.value}
              </Typography>
            </Box>
            {index !== contractData.length - 1 && <Divider color="#F2F2F2" />}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default SideCard;
