"use client"
import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomDropdown from "../CustomDropDown";
import CustomTextField from "../CustomTextField";
import { custom } from "@/app/theme";
import DescriptiveText from "../DescriptiveText";

const options = ["A", "B", "C", "D"];
const TableFilters = ({ filters, bottomBorder = true, textFieldWidth = 350 }) => {
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
      sx={{ p: 2, pb: 1, px: 3 }}
    >
      <DescriptiveText text="Advance Filter" fontSize={16} fontWeight={500} color={custom.primaryText} />
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // flexWrap: "wrap",
          gap: "1rem",
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
                <CustomTextField placeholder={filter?.placeholder} sx={{ width: textFieldWidth, }} label={filter?.filterName} />
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
      {bottomBorder && <Divider sx={{ mt: "20px", }} />}
    </Box>
  );
};

export default TableFilters;