"use client"

import React, { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
  IconButton,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import VisibilityIcon from "@mui/icons-material/Visibility"
import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import LockIcon from "@mui/icons-material/Lock"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderRight: "1px solid rgba(224, 224, 224, 1)",
  padding: "8px 16px",
  "&.header": {
    backgroundColor: "#104774",
    color: "white",
    fontWeight: "bold",
  },
}))

const BlueDot = styled("div")`
  width: 8px;
  height: 8px;
  background-color: #104774;
  border-radius: 50%;
`;

const StyledTableRow = styled(TableRow)(({ isChild , isParentRow}) => ({
  "& > td": {
    ...(isParentRow && {
      borderTop: "1px solid lightgray", // Only top border for parent rows
      borderBottom: "none",
    }),
    ...(isChild && {
      borderTop: "none", // Remove the top border for child rows
      borderBottom: "none",
    }),
  },
}));


const IndentedCell = styled(StyledTableCell)(({ indent = 0 }) => ({
  // paddingLeft: `${24 + indent * 20}px`,
}))

const iconMap = {
  View: <VisibilityIcon fontSize="5px"/>,
  Add: <AddIcon fontSize="5px"/>,
  Edit: <EditIcon fontSize="5px"/>,
  Delete: <DeleteIcon fontSize="5px"/>,
};

export default function CustomizablePermissionsTable({
  permissions,
  columns,
  customPermissionsLabel,
}) {
  const [selectAll, setSelectAll] = useState({})
  const [permissionState, setPermissionState] = useState(permissions)

  const parentRows = ["Companies", "Campaigns", "Applicants", "Employees"]

  const handleSelectAllChange = (column) => {
    const newSelectAll = { ...selectAll, [column]: !selectAll[column] }
    setSelectAll(newSelectAll)

    const newPermissionState = permissionState.map((row) => ({
      ...row,
      permissions: row.permissions.includes(column.toLowerCase())
        ? newSelectAll[column]
          ? [...row.permissions]
          : row.permissions.filter((p) => p !== column.toLowerCase())
        : newSelectAll[column]
        ? [...row.permissions, column.toLowerCase()]
        : [...row.permissions],
    }))

    setPermissionState(newPermissionState)
  }

  const handlePermissionChange = (rowIndex, column) => {
    const newPermissionState = [...permissionState]
    const permissionIndex = newPermissionState[rowIndex].permissions.indexOf(column.toLowerCase())
    if (permissionIndex > -1) {
      newPermissionState[rowIndex].permissions.splice(permissionIndex, 1)
    } else {
      newPermissionState[rowIndex].permissions.push(column.toLowerCase())
    }
    setPermissionState(newPermissionState)
  }

  return (
    <TableContainer component={Paper} sx={{borderRadius:"10px"}}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell className="header">
            <IconButton size="small" style={{ color: "white" }}>
                <LockIcon fontSize="5px" />
              <Typography variant="subtitle2" marginLeft="10px">Name</Typography>
              </IconButton>
            </StyledTableCell>
            {columns.map((column, index) => (
              <StyledTableCell key={index} className="header" align="center">
                <IconButton size="small" style={{ color: "white" }}>
                  {iconMap[column]}
                <Typography variant="subtitle2" marginLeft="10px">{column}</Typography>
                </IconButton>
              </StyledTableCell>
            ))}
            <StyledTableCell className="header">
              <IconButton size="small" style={{ color: "white" }}>
                <LockIcon fontSize="px" />
              <Typography variant="subtitle2" marginLeft="10px">{customPermissionsLabel}</Typography>
              </IconButton>
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>
            </StyledTableCell>
            {columns.map((column, index) => (
              <StyledTableCell key={index} align="center">
                <Checkbox
                  size="small"
                  checked={selectAll[column] || false}
                  onChange={() => handleSelectAllChange(column)}
                 sx={{
                            color: "lightgray",
                            '&.Mui-checked': {
                              color: "#104774",
                            },
                            borderRadius: "5px",
                          }}
                />
                <Typography variant="body2" component="span" style={{ marginLeft: '5px' }}>
                Select All
              </Typography>
              </StyledTableCell>
            ))}
            <StyledTableCell>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {permissionState.map((row, index) => {
            const isChild = row.level > 0
            const isParentRow = parentRows.includes(row.name)
            return (
              <StyledTableRow key={index} isChild={isChild && !isParentRow} isParentRow={!isChild && isParentRow}>
                <IndentedCell indent={row.level}>
                {/* {isChild &&<BlueDot />} */}
                {isChild && <span style={{ display: "inline-block", marginRight: "8px" }}><BlueDot /></span>}
                <span>{row.name}</span>
                </IndentedCell>
                {columns.map((column, colIndex) => (
                  <StyledTableCell key={colIndex} align="center">
                   {!isParentRow && 
                   <Checkbox
                      size="small"
                      checked={row.permissions.includes(column.toLowerCase())}
                      onChange={() => handlePermissionChange(index, column)}
                      sx={{
                            color: "lightgray", // Default color
                            '&.Mui-checked': {
                              color: "#104774", // Checked color
                            },
                            borderRadius: "5px",
                          }}
                    />}
                  </StyledTableCell>
                ))}
                <StyledTableCell align="center">
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {row.customPermissions.map((permission, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center" }}>
                        <Checkbox size="small"   sx={{
                            color: "lightgray", 
                            '&.Mui-checked': {
                              color: "#104774",
                            },
                            borderRadius: "5px",
                          }}/>
                        <Typography variant="body2">{!isParentRow && permission}</Typography>
                      </div>
                    ))}
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

