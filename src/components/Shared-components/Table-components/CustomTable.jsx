import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const allowedFields = [
  "date",
  "fullName",
  "residentCountry",
  "residentCity",
  "drivingLicense",
  "passportNumber",
  "phoneNumber",
  "preferredWorkingCity",
  "referBy",
  "campaignName",
  "remarks",
  "reasonToHold",
  "status",
  // salik
  "invoiceMonth",
  "vendorName",
  "dateOfSalik",
  "transactionID",
  "registrationNo.",
  "salikAmount",
  "tollGate",
  "direction",
  // traffic
  "id",
  "bikePlateNo",
  "challanAmount",
  "challanNumber",
  "city",
  "location",
  "reason",
  "dateAndTimeOfTrafficChallan",
  "challanAttachments",
  "bikeOwner",
  "createdOn",
];

const CustomTable = ({ columns, data, onRowSelect, handleFilterClick, isSelectedOption = true }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const isAllSelected = selectedRows.length === data.length && data.length > 0;
  const isIndeterminate =
    selectedRows.length > 0 && selectedRows.length < data.length;

  const handleSelectRow = (rowId) => {
    const updatedSelection = selectedRows.includes(rowId)
      ? selectedRows.filter((id) => id !== rowId)
      : [...selectedRows, rowId];

    setSelectedRows(updatedSelection);
    onRowSelect && onRowSelect(updatedSelection);
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows([]);
      onRowSelect && onRowSelect([]);
    } else {
      const allRowIds = data.map((row) => row.id);
      setSelectedRows(allRowIds);
      onRowSelect && onRowSelect(allRowIds);
    }
  };

  return (
    <TableContainer
      sx={{
        maxWidth: "80vw",
      }}
      className="no-scroll-show"
    >
      <Table stickyHeader>
        <TableHead
          sx={{
            "& .MuiTableCell-root": {
              fontWeight: "500",
              bgcolor: "#80839014",
            },
          }}
        >
          <TableRow sx={{ "& .MuiTableCell-root": { pt: 0.5, pb: 0.2 } }}>
            {isSelectedOption && <TableCell padding="checkbox" >
              <Checkbox
                indeterminate={isIndeterminate}
                checked={isAllSelected}
                onChange={handleSelectAll}
                size="small"
              />
            </TableCell>}
            {columns.map((column) => (
              <TableCell

                key={column.field}
                align={column.align || "left"}
                sx={{ fontWeight: "400", whiteSpace: "nowrap", }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'space-between',
                    gap: 1
                  }}
                >
                  <Typography variant="caption">{column.headerName}</Typography>
                  {allowedFields.includes(column.field) && (
                    <Box component="img" src="/icons/filter.svg" sx={{ width: 20, height: 20 }} onClick={() => handleFilterClick(column.field)}></Box>
                  )}
                </Box>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row.id} hover>
              {isSelectedOption && <TableCell padding="checkbox">
                <Checkbox
                  size="small"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleSelectRow(row.id)}
                />
              </TableCell>}
              {columns?.map((column) => (
                <TableCell

                  key={column.field}
                  align={column.align || "left"}
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {column.render
                    ? column.render(row)
                    : typeof row[column.field] === "object"
                      ? row[column.field]?.name || "-"
                      : row[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
