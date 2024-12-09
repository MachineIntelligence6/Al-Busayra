import ViewEmployeeHeader from "@/components/Shared-components/ViewEmployeeHeader";
import { Box } from "@mui/material";
import React, { useRef } from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PlatformDetailCard from "./PlatformDetailCard";

const PlatformDetailModal = ({ onClose }) => {
  const PopUpRef = useRef(null);
  const closePopUp = (e) => {
    if (PopUpRef.current === e.target) {
      onClose();
    }
  };

  const handleBackClick = () => {
    console.log("Back Clicked!");
  };

  const handleEditClick = () => {
    console.log("Edit Clicked!");
  };

  const buttons = [
    {
      label: "Back",
      onClick: handleBackClick,
      startIcon: <KeyboardBackspaceIcon />,
    },
    {
      label: "Edit",
      onClick: handleEditClick,
      endIcon: <DriveFileRenameOutlineIcon />,
    },
  ];

  return (
    <Box
      ref={PopUpRef}
      onClick={closePopUp}
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(17,17,17,0.80)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
        padding: "1rem",
      }}
    >
      <Box sx={{ backgroundColor: "#FFF", borderRadius: "15px" }}>
        <Box sx={{}}>
          <ViewEmployeeHeader
            fullName="Abid Ali"
            description="Vendor"
            buttons={buttons}
            onBackClick={handleBackClick}
            onEditClick={handleEditClick}
            sx={{
              borderRadius: "15px",
              // border: "2px solid rgba(0, 0, 0, 0.1)",
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>
        <Box>
          <Box sx={{ width: "1188px" }}>
            <PlatformDetailCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PlatformDetailModal;
