import { Box } from "@mui/material";
import React, { useRef } from "react";
import AdvanceSalaryRequestTable from "./AdvanceSalaryTable";

const AdvanceSalaryTableModal = ({ onClose }) => {
  const PopUpRef = useRef(null);

  const closePopUp = (e) => {
    if (PopUpRef.current === e.target) {
      onClose();
    }
  };

  return (
    <Box
      ref={PopUpRef}
      onClick={closePopUp}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(17,17,17,0.80)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
        padding: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          // padding: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <AdvanceSalaryRequestTable />
      </Box>
    </Box>
  );
};

export default AdvanceSalaryTableModal;
