import { TypeSpecimenTwoTone } from "@mui/icons-material";
import { Box, Card, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Link from "next/link";

function CompaniesCard({ data }) {
  return (
    <Grid container spacing={1} width="100%" component={Link} sx = {{textDecoration:'none'}} href={'/dashboard/companies/view'}>
    {data?.map((element, idx) => (
      
        <Card
          sx={{
            maxWidth: "514px",
            width: "100%",
            borderRadius: "25px",
            background:`${element?.color}`,
            color:'white'
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingX: "25px",
              paddingY: '25px'
            }}
          >
            <Box sx={{ width: "60px", height: "60px", borderRadius: "100%", overflow: 'hidden' }}>
              <Image src={element?.img} width={60} height={60} alt="" />
            </Box>
            <div style={{ transform: "rotate(90deg)", display: "inline-block" }}>
              <MoreHorizIcon sx={{ width: "40px", height: "40px" }} />
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: '10px',
              marginBottom: '10px',
              paddingX: '25px'
            }}
          >
            <Typography>{element?.name}</Typography>
            
            <Typography sx = {{padding:'5px',paddingRight:'20px',paddingLeft:'20px',backgroundColor:'white',borderRadius:'41px',color:'black'}}>Industry: {element?.industry}</Typography>
          </Box>
          <Divider sx = {{background:'white'}} />
          

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "13px",
              width: "100%",
              padding: '25px'
            }}
          >
            {/* Country Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap:'10px'
                }}
              >
                <Image src="/location.png" width={24} height={24} alt="Location" />
                <Typography>Country</Typography>
              </Box>
              <Box style = {{backgroundColor:'#0F163D',padding:'5px',borderRadius:'4px'}}>{element?.country}</Box>
            </Box>

            {/* Email Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap:'10px'
                }}
              >
                <Image src="/email.png" width={24} height={24} alt="Email" />
                <Typography>Email</Typography>
              </Box>
              <Box>{element?.email}</Box>
            </Box>

            {/* Phone Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap:'10px'
                }}
              >
                <LocalPhoneOutlinedIcon sx={{ color:'#F2F2F2' }} />
                <Typography>Phone</Typography>
              </Box>
              <Box>{element?.phone}</Box>
            </Box>
          </Box>
        </Card>
      
    ))}
  </Grid>
  );
}

export default CompaniesCard;
