"use client";

import React, { useState } from "react";
import {
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
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home"; // Example icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Another example icon
import BikeScooterIcon from "@mui/icons-material/BikeScooter"; // Bike Icon example
import { PdfIcon } from "@/utils/Icons";

const AssetHistory = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const rows = [
    {
      bikePlateNo: "1713",
      bikeCity: "Sharjah",
      bikeOwnerShip: {
        imageUrl: "/company/ABDS.svg",
        value: "ABDS",
      },
      bikeIssueDate: "10/09/2024",
      bikeIssueTime: "10:00 AM",
      foodPermit: "Yes",
      mulkiya: "No",
      physicalAllocation: "Allocation picture",
      clearanceDate: "--",
      riderAcquiringVendor: {
        imageUrl: "/company/Avataricon.svg",
        value: "Rafiq Khan",
      },
      platform: {
        imageUrl: "/company/careemicon.svg",
        value: "Rafiq Khan",
      },
      status: "Currently Assigned",
      icons: {
        physicalAllocation: <PdfIcon sx={{ color: "" }} />,
      },
    },
    {
      bikePlateNo: "1813",
      bikeCity: "Dubai",
      bikeOwnerShip: {
        imageUrl: "/company/ABDS.svg",
        value: "ABDS",
      },
      bikeIssueDate: "10/08/2024",
      bikeIssueTime: "11:00 AM",
      foodPermit: "Yes",
      mulkiya: "No",
      physicalAllocation: "Allocation picture",
      clearanceDate: "12/09/2024",
      riderAcquiringVendor: {
        imageUrl: "/company/Avataricon.svg",
        value: "Rafiq Khan",
      },
      platform: {
        imageUrl: "/company/careemicon.svg",
        value: "Rafiq Khan",
      },
      status: "Close",
      icons: {
        physicalAllocation: <PdfIcon sx={{ color: "" }} />,
      },
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
    <Box sx={{}}>
      {/* <Box
        sx={{
          bgcolor: "#F4F4F4",
          p: 2.5,
          color: "#000",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        Bike Information
      </Box> */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead
            sx={{
              backgroundColor: "#F4F4F4",
              borderTop: "1px solid rgba(172, 170, 177, 0.20)",
              width: "full",
            }}
          >
            <TableRow>
              <TableCell>Bike Plate No</TableCell>
              <TableCell>Bike City</TableCell>
              <TableCell>Bike Ownership</TableCell>
              <TableCell>Date of Bike Issue</TableCell>
              <TableCell>Time of Bike Issue</TableCell>
              <TableCell>Food Permit provided to Rider</TableCell>
              <TableCell>Mulkiya provided to Rider</TableCell>
              <TableCell>Picture of Physical Allocation to Rider</TableCell>
              <TableCell>Clearance Date</TableCell>
              <TableCell>Rider Acquiring Vendor</TableCell>
              <TableCell>Platform</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  {/* {row.icons.bikePlateNo} */}
                  {row.bikePlateNo}
                </TableCell>
                <TableCell>{row.bikeCity}</TableCell>
                <TableCell>
                  {/* Render both the text and image in the same cell */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img
                      src={row.bikeOwnerShip.imageUrl}
                      alt="Physical Allocation"
                      style={{
                        width: "30px", // Set width of the image
                        height: "30px", // Set height of the image
                        borderRadius: "50%", // Optional: Make it circular
                        objectFit: "cover", // Ensure the image fits within the bounds
                      }}
                    />
                    <span>{row.bikeOwnerShip.value}</span>
                  </Box>
                </TableCell>
                <TableCell>{row.bikeIssueDate}</TableCell>
                <TableCell>{row.bikeIssueTime}</TableCell>
                <TableCell>{row.foodPermit}</TableCell>
                <TableCell>{row.mulkiya}</TableCell>

                <TableCell>
                  {/* Render both the text and image in the same cell */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{}}>{row.icons.physicalAllocation}</Box>
                    <span>{row.physicalAllocation}</span>
                  </Box>
                </TableCell>
                <TableCell>{row.clearanceDate}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img
                      src={row.riderAcquiringVendor.imageUrl}
                      alt="Physical Allocation"
                      style={{
                        width: "30px", // Set width of the image
                        height: "30px", // Set height of the image
                        borderRadius: "50%", // Optional: Make it circular
                        objectFit: "cover", // Ensure the image fits within the bounds
                      }}
                    />
                    <span>{row.riderAcquiringVendor.value}</span>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img
                      src={row.platform.imageUrl}
                      alt="Physical Allocation"
                      style={{
                        width: "30px", // Set width of the image
                        height: "30px", // Set height of the image
                        borderRadius: "50%", // Optional: Make it circular
                        objectFit: "cover", // Ensure the image fits within the bounds
                      }}
                    />
                    <span>{row.platform.value}</span>
                  </Box>
                </TableCell>
                <TableCell>{row.status}</TableCell>

                <TableCell>
                  <Chip
                    label={row.status}
                    sx={{
                      backgroundColor:
                        row.status === "Currently Assigned"
                          ? "#28C76F29"
                          : "#28C76F29",
                      color:
                        row.status === "Currently Assigned"
                          ? "#28C76F"
                          : "#28C76F",
                      fontWeight: 500,
                      borderRadius: "4px",
                      padding: "2px 10px",
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
    </Box>
  );
};

export default AssetHistory;
