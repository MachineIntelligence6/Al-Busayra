import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomDropdown from "../CustomDropDown";
import CustomTextField from "../CustomTextField";

const options = ["A", "B", "C", "D"];
const TableFilters = ({ filters }) => {
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [dropdown3Value, setDropdown3Value] = useState("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Box
      component="div"
      sx={{  m: 2,}}
    >
      <Typography variant="caption" sx={{ fontSize: 16 }}>
        Advance Filters
      </Typography>

      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // flexWrap: "wrap",
          gap:"1rem",
          my: 2,
        }}
      >

        {filters?.length ? filters?.map(filter => {

          return (
            <>
              {filter?.options ? (<CustomDropdown key={filter?.id}
                sx={{ flex: 1, placeItems: "start" }}
                label={filter?.filterName}
                placeholder={filter?.placeholder}
                options={filter?.options}
              // value={dropdown1Value}
              // onChange={(e) => setDropdown1Value(e.target.value)}
              />) : <Box key={filter?.id} sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>{filter?.filterName}</Typography>
                <CustomTextField placeholder={filter?.placeholder} sx={{ width: 350, }} />
              </Box>}

            </>
          )
        }) : <>

          <CustomDropdown
            sx={{ flex: 1, placeItems: "start" }}
            label="Campaign Name"
            placeholder="Please Select"
            options={options}
            value={dropdown1Value}
            onChange={(e) => setDropdown1Value(e.target.value)}
          />
          <CustomDropdown
            sx={{ flex: 1, placeItems: "start" }}
            label="Country"
            placeholder="UAE"
            options={options}
            value={dropdown2Value}
            onChange={(e) => setDropdown2Value(e.target.value)}
          />
          <CustomDropdown
            sx={{ flex: 1, placeItems: "start" }}
            label="City"
            placeholder="Dubai"
            options={options}
            value={dropdown3Value}
            onChange={(e) => setDropdown3Value(e.target.value)}
          />
        </>}

      </Box>
      <Divider />
    </Box>
  );
};

export default TableFilters;