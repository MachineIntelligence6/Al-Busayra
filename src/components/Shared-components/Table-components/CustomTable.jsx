import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Box,
  Typography,
  styled,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { custom } from "@/app/theme";

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

const CustomTable = ({ columns, data, onRowSelect, handleFilterClick, isSelectedOption = true, isFiltered = true, headTextTransform = "capitalize" }) => {
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

  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    // '& .MuiSvgIcon-root': {
        //   borderRadius: '4px', // Rounded corners for the icon
        //   border: `2px solid ${custom.mute}`,
        //     backgroundColor: 'transparent'
        // },
        '&.Mui-checked': {
          color: custom.deepBlue, // Color when checked
          backgroundColor: 'transparent',
        },
  }));

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
              bgcolor: "#80839014"
            },
          }}
        >
          <TableRow sx={{ "& .MuiTableCell-root": { py: "5px", } }}>
            {isSelectedOption && <TableCell padding="checkbox" >
              <CustomCheckbox
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
                sx={{ fontWeight: "500", whiteSpace: "nowrap",}}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'space-between',
                    gap: 1,

                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: "13px", fontWeight: 500, textTransform: headTextTransform ,color:"#2F2B3DE5",lineHeight:0  }}>{column.headerName}</Typography>
                  {allowedFields.includes(column) && isFiltered && (
                    <Box component="img" src="/icons/filter.svg" sx={{ width: 20, height: 20 }} onClick={() => handleFilterClick(column.field)}></Box>
                  )}
                </Box>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row.id} hover sx={{ "& .MuiTableCell-root": { py:"13px" }, color: custom.primaryText }}>
              {isSelectedOption && <TableCell padding="checkbox">
                <CustomCheckbox
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
                      ? <Typography color={custom.primaryText} fontSize="14px" fontWeight="400">{row[column.field]?.name}</Typography> || "-"
                      : <Typography color={custom.primaryText} fontSize="14px" fontWeight="400">{row[column.field]}</Typography>}
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
