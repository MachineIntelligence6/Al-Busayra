import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import CustomDropdown from "../CustomDropDown";

export const customTableFilter = ({ title = "Advanced Filters", filters }) => {
  return (
    <Box component="div" sx={{ m: 2 }}>
      <Typography variant="caption" sx={{ fontSize: 16 }}>
        {title}
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          my: 2,
        }}
      >
        {filters?.length ? (
          filters.map((filter) => (
            <Box
              key={filter.id}
              sx={{
                flex: filter.options ? 1 : "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {filter.options ? (
                <CustomDropdown
                  sx={{ placeItems: "start" }}
                  label={filter.filterName}
                  placeholder={filter.placeholder}
                  options={filter.options}
                />
              ) : (
                <Typography>{filter.filterName}</Typography>
              )}
            </Box>
          ))
        ) : (
          <Typography>No filters available</Typography>
        )}
      </Box>
      <Divider />
    </Box>
  );
};

