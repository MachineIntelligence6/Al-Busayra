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
];

const CustomTable = ({ columns, data, onRowSelect, handleFilterClick }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const isAllSelected = selectedRows.length === data.length && data.length > 0;
  const isIndeterminate =
    selectedRows.length > 0 && selectedRows.length < data.length;

  const handleSelectRow = (rowId) => {
    const updatedSelection = selectedRows.includes(rowId)
      ? selectedRows.filter((id) => id !== rowId) // Deselect row
      : [...selectedRows, rowId]; // Select row

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
        // overflowX: "auto",
      }}
      className="no-scroll-show"
    >
      <Table stickyHeader sx={{
        maxWidth: "80vw",
        overflowX: "auto",
      }}>
        <TableHead
          sx={{
            "& .MuiTableCell-root": {
              fontWeight: "500",
              bgcolor: "#80839014",
            },
          }}
        >
          <TableRow>
            {/* Checkbox Column Header */}
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={isIndeterminate}
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </TableCell>
            {/* Render Column Headers */}
            {columns.map((column) => (
              <TableCell
                key={column.field}
                align={column.align || "left"}
                sx={{ fontWeight: "400", whiteSpace: "nowrap" }}
              >
                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {column.headerName}

                  {/* Conditionally render the filter icon based on column field */}
                  {allowedFields.includes(column.field) ? (
                    <IconButton
                      size="small"
                      onClick={() => handleFilterClick(column.field)}
                    //   sx={{ marginLeft: "8px", padding: 0 }}
                    >
                      <FilterListIcon />
                      {/* <Image src="/public/applicantIcons/filter.svg" alt="filter" width={50} height={50} /> */}
                    </IconButton>
                  ) : null}
                </span>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ overflowY: "scroll", maxHeight: "100%" }}>
          {data.map((row) => (
            <TableRow key={row.id} hover>
              {/* Checkbox Column */}
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleSelectRow(row.id)}
                />
              </TableCell>
              {/* Render Row Data */}
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  align={column.align || "left"}
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {column.render ? column.render(row) : row[column.field]}
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
