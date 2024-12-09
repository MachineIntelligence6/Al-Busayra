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

const CustomTable = ({ columns, data, onRowSelect, handleFilterClick }) => {
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
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={isIndeterminate}
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </TableCell>
            {columns.map((column) => (
              <TableCell
                key={column.field}
                align={column.align || "left"}
                sx={{ fontWeight: "400", whiteSpace: "nowrap" }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {column.headerName}
                  {allowedFields.includes(column.field) && (
                    <IconButton
                      size="small"
                      onClick={() => handleFilterClick(column.field)}
                    >
                      <FilterListIcon />
                    </IconButton>
                  )}
                </span>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleSelectRow(row.id)}
                />
              </TableCell>
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
