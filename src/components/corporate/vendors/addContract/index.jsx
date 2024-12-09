import CustomAvatar from "@/components/Shared-components/CustomAvatar";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";
import { addContractData } from "@/utils/vendor-detail";
import ContractForm from "./ContractForm";
import OtherContracts from "./OtherContracts";

// Assuming vendorDetail is imported or defined above this component

const AddContract = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: "flex", gap: 2, flex: "1 1 0" }}>
        <Box
          sx={{
            width: "486px",
            bgcolor: "#062A47",
            boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
            borderRadius: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            color: "#F2F2F2",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: "18px",
            }}
          >
            <Avatar
              src="/images/profile-m.jpg"
              sx={{
                width: 70,
                height: 70,
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography>Saleem Akhtar Muhammad Miskeen</Typography>
              <Typography>saleemakhtar@gmail.com</Typography>
            </Box>
          </Box>
          <Divider color="white" />

          {/* Map over vendorDetail and render each item */}
          {addContractData.map((item, index) => (
            <React.Fragment key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "6px 24px",
                  marginBottom:
                    index === addContractData.length - 1 ? "16px" : "0", // Add margin at the bottom of the last item
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.70)",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.90)",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
              {index !== addContractData.length - 1 && (
                <Divider color="#F2F2F2" />
              )}
            </React.Fragment>
          ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', }}>

          <Box sx={{ backgroundColor: '#FFF', boxShadow: '0px 2px 8px 0px rgba(47, 43, 61, 0.12)', borderRadius: '30px', p: 3, }} >
            <ContractForm />
          </Box>
          <Box sx={{ backgroundColor: '#FFF', boxShadow: '0px 2px 8px 0px rgba(47, 43, 61, 0.12)', borderRadius: '30px', }}>
            <OtherContracts />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddContract;
