import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    IconButton,
    Box,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const CustomTable = ({ columns, data, onRowSelect }) => {
    const [selectedRows, setSelectedRows] = useState([]);

    const isAllSelected = selectedRows.length === data.length && data.length > 0;
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length;

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
        // component={Paper}
        // sx={{
        //     height: "100%",
        //     overflowX: "scroll",
        //     overflowY: "scroll",

        // }}
        >
            <Table stickyHeader>
                <TableHead sx={{
                    "& .MuiTableCell-root": {
                        fontWeight: "500",
                        bgcolor: "#80839014",
                    },
                }}>
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
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    {column.headerName}
                                    {/* <IconButton
                                        size="small"
                                        onClick={() => column.onFilter && column.onFilter(column.field)}
                                    >
                                        <FilterListIcon fontSize="small" />
                                    </IconButton> */}
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
                                    sx={{ whiteSpace: "wrap" }}
                                >
                                    {column.render ? column.render(row) : row[column.field]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Box component="div" sx={{ width: "100%", height: 40, bgcolor: "ButtonShadow" }}></Box>
        </TableContainer>
    );
};

export default CustomTable;
