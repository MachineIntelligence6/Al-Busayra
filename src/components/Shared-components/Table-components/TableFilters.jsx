import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomDropdown from "../CustomDropDown";
import CustomTextField from "../CustomTextField";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const TableFilters = ({ filters }) => {
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [dropdown3Value, setDropdown3Value] = useState("");

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        m: 2,
        "& .MuiInputBase-root": { width: "95%" },
      }}
    >
      {/* Section Title */}
      <Typography variant="caption" sx={{ fontSize: 16, fontWeight: 600 }}>
        Advance Filters
      </Typography>

      {/* Filters Container */}
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          my: 2,
          mr: 1
        }}
      >
        {filters?.length ? (
          filters.map((filter) => (
            <Box
              key={filter?.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: "1 1 20%",
                minWidth: "300px",
                maxWidth: "400px",
              }}
            >


              {/* Render Dropdown or TextField */}
              {filter?.options ? (
                <CustomDropdown
                  label={filter?.filterName}
                  placeholder={filter?.placeholder ? filter?.placeholder : "please select"}
                  options={filter?.options}
                  value={filter?.value}
                />
              ) : (
                <>
                  {/* Label */}
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {filter?.filterName}
                  </Typography>
                  <CustomTextField
                    placeholder={filter?.placeholder ? filter?.placeholder : "placeholder"}
                    value={filter?.value}
                  />
                </>
              )}
            </Box>
          ))
        ) : (
          <>
            <CustomDropdown
              sx={{ flex: 1 }}
              label="Campaign Name"
              placeholder="Please Select"
              options={options}
              value={dropdown1Value}
              onChange={(e) => setDropdown1Value(e.target.value)}
            />
            <CustomDropdown
              sx={{ flex: 1 }}
              label="Resident Country"
              placeholder="Pakistan"
              options={options}
              value={dropdown2Value}
              onChange={(e) => setDropdown2Value(e.target.value)}
            />
            <CustomDropdown
              sx={{ flex: 1 }}
              label="Resident City"
              placeholder="Islamabad"
              options={options}
              value={dropdown3Value}
              onChange={(e) => setDropdown3Value(e.target.value)}
            />
          </>
        )}
      </Box>

      {/* Divider */}
      <Divider />
    </Box>
  );
};

export default TableFilters;
