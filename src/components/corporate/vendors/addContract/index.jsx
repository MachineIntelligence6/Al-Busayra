import CustomAvatar from "@/components/Shared-components/CustomAvatar";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";
import { addContractData } from "@/utils/vendor-detail";
import ContractForm from "./ContractForm";
import OtherContracts from "./OtherContracts";
import SideCard from "@/components/Shared-components/SideCard";

const AddContract = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: "flex", gap: 2, flex: "1 1 0" }}>
        <SideCard
          avatarSrc="/icons/pic.svg"
          name="Saleem Akhtar Muhammad Miskeen"
          email="saleemakhtar@gmail.com"
          contractData={addContractData}
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
            <ContractForm />
          </Box>
          <Box
            sx={{
              backgroundColor: "#FFF",
              boxShadow: "0px 2px 8px 0px rgba(47, 43, 61, 0.12)",
              borderRadius: "30px",
            }}
          >
            <OtherContracts />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddContract;
