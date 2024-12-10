"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const RiderContract = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const rows = [
    {
      contractName: "American Kiwi",
      signingDate: "10/09/2024",
      startDate: "10/09/2024",
      endDate: "10/09/2024",
      fixedAmount: "2800 AED",
      commission: "2800 AED",
      status: "Active",
    },
    {
      contractName: "American Kiwi",
      signingDate: "10/08/2024",
      startDate: "10/09/2024",
      endDate: "10/09/2024",
      fixedAmount: "2800 AED",
      commission: "2800 AED",
      status: "Close",
    },
  ];

  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleEdit = () => {
    // Handle the edit action for the selectedRow
    console.log("Editing contract: ", selectedRow);
    handleClose(); // Close the menu after the action
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "#F4F4F4" }}>
          <TableRow>
            <TableCell>Contract Name</TableCell>
            <TableCell>Contract Signing Date</TableCell>
            <TableCell>Contract Start Date</TableCell>
            <TableCell>Contract End Date</TableCell>
            <TableCell>Fixed Amount Rider</TableCell>
            <TableCell>Commission Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.contractName}</TableCell>
              <TableCell>{row.signingDate}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>{row.fixedAmount}</TableCell>
              <TableCell>{row.commission}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  // color={row.status === "Active" ? "success" : "error"}
                  // variant="outlined"
                  sx={{
                    backgroundColor:
                      row.status === "Active" ? "#28C76F29" : "#FF4C5129",
                    color: row.status === "Active" ? "#28C76F" : "#FF4C51",
                    fontWeight: 500,
                    borderRadius: "6px",
                    padding: "1px 10px",
                  }}
                />
              </TableCell>
              <TableCell>
                <IconButton onClick={(e) => handleClick(e, row)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleEdit}>Edit</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RiderContract;
