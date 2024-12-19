"use client";
import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomDropdown from "../CustomDropDown";
import CustomTextField from "../CustomTextField";
import { custom } from "@/app/theme";
import DescriptiveText from "../DescriptiveText";
import CustomMultiSelected from "../CustomMultiSelected";

const options = ["A", "B", "C", "D"];
const TableFilters = ({
  filters,
  bottomBorder = true,
  heading = "Advance Filter"
}) => {
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [dropdown3Value, setDropdown3Value] = useState("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Box component="div" sx={{ pb: 1, px: 2, pt: 1 }}>

      {heading && <DescriptiveText text={heading} fontWeigth={500} fontSize={15} color={custom.primaryText} />}


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
        {filters?.length ? (
          filters?.map((filter) => {
            return (
              <>
                {filter?.options ? (
                  // <CustomDropdown
                  //   key={filter?.id}
                  //   sx={{ flex: 1, placeItems: "start" }}
                  //   label={filter?.filterName}
                  //   placeholder={filter?.placeholder}
                  //   options={filter?.options}
                  // />
                  <CustomMultiSelected key={filter?.id}
                    sx={{ flex: 1, placeItems: "start" }}
                    label={filter?.filterName}
                    placeholder={filter?.placeholder}
                    options={filter?.options} />

                ) : (
                  <Box
                    key={filter?.id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {/* <Typography sx={{ fontSize: "15px", fontWeight:"400" }} color={custom.PrimaryText}>{filter?.filterName}</Typography> */}
                    <CustomTextField
                      placeholder={filter?.placeholder}
                      label={filter.filterName}
                    />
                  </Box>
                )}
              </>
            );
          })
        ) : (
          <>
            <CustomMultiSelected label="Campaign Name" />
            <CustomMultiSelected label="Country" />
            <CustomMultiSelected label="City" />

          </>
        )}
      </Box>
      {bottomBorder && <Divider sx={{ mt: "20px" }} />}
    </Box>
  );
};

export default TableFilters;
