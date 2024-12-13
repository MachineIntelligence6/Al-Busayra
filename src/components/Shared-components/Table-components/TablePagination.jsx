import React, { useMemo } from "react";
import { Box, Typography, Pagination } from "@mui/material";

const TablePagination = ({
  totalEntries = 100,
  rowsPerPage = 9,
  currentPage = 1,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalEntries / rowsPerPage);

  // Calculate the displayed range of entries
  const rangeText = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage + 1;
    const end = Math.min(currentPage * rowsPerPage, totalEntries);
    return `Showing ${start} to ${end} of ${totalEntries} entries`;
  }, [currentPage, rowsPerPage, totalEntries]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      {/* Entry Range Text */}
      <Typography variant="body2" color="text.secondary">
        {rangeText}
      </Typography>

      {/* Pagination Component */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        siblingCount={1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            borderRadius: "4px",
          },
          "& .Mui-selected": {
            backgroundColor: "#004080 !important", // Custom color for the selected page
            color: "white !important",
          },
        }}
      />
    </Box>
  );
};

export default TablePagination;
