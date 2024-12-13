import SideCard from "@/components/Shared-components/SideCard";
import { Box } from "@mui/material";
import React from "react";
import AssetHistory from "./AssetHistory";
import AllocateAsset from "./AllocateAsset";
import { allocateAssetData } from "@/utils/vendor-detail";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AssignBike = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2, flex: "1 1 0" }}>
        <SideCard
          avatarSrc="/icons/pic.svg"
          name="Saleem Akhtar Muhammad Miskeen"
          email="saleemakhtar@gmail.com"
          contractData={allocateAssetData}
          isButton={true}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FFF",
              boxShadow: "0px 2px 8px 0px rgba(47, 43, 61, 0.12)",
              borderRadius: "30px",
              p: 3,
            }}
          >
            <AllocateAsset />
          </Box>

          <Box
            sx={{
              backgroundColor: "#FFF",
              boxShadow: "0px 2px 8px 0px rgba(47, 43, 61, 0.12)",
              borderRadius: "30px",
            }}
          >
            <Box
              sx={{
                p: 2.5,
                fontSize: "18px",
                fontWeight: 500,
                color: "#4B465C",
              }}
            >
              Asset History
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Accordion>
                <Box
                  sx={{
                    bgcolor: "#F4F4F4",

                    color: "#000",
                    fontSize: "14px",
                    fontWeight: 500,
                    width: "100%",
                    p: 1,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Box sx={{}}>Bike Information</Box>
                  </AccordionSummary>
                </Box>
                <AccordionDetails>
                  <AssetHistory />
                </AccordionDetails>
              </Accordion>

              {/* <Accordion>
                <Box
                  sx={{
                    bgcolor: "#F4F4F4",

                    color: "#000",
                    fontSize: "14px",
                    fontWeight: 500,
                    width: "100%",
                    p: 1,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Box sx={{}}>Bike Information</Box>
                  </AccordionSummary>
                </Box>
                <AccordionDetails>
                  <AssetHistory />
                </AccordionDetails>
              </Accordion> */}
              <Box sx={{ mt: 2 }}></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AssignBike;
