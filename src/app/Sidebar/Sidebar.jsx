"use client";
import React, { useState } from "react";
import { data } from "./data";
import Grid from "@mui/material/Grid2";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathName = usePathname();
  const [selectedUrl, setSelectedUrl] = useState(null);
  // {
  //   title: "Companies",
  //   img:'/sidebarIcons/companies.png',
  //   url: "/dashboard/companies",
  // },
  return (
    
    <Box
      sx={{
        paddingX: "12px",
        paddingTop: "24px",
        paddingBottom: "12px",
        gap: "16px",
        display: "flex",
        flexDirection: "column",
        overflow:'auto',
        height:'100vh'
      }}
    >
      <Stack>
        <Link href={"/dashboard/companies"}>
          <Image src="/logowhite.png" width={220} height={37} alt="Logo" />
        </Link>
      </Stack>

      <Divider color="white" />

      <Box
      component={Link}
      href={"/dashboard/companies"}
        sx={{
          display: "flex",
          direction: "row",
          textDecoration: "none",
          gap: "6px",
          paddingY: "8px",
          paddingX: "12px",
          borderRadius: "8px",
          cursor: "pointer",
          color: `${pathName === "/dashboard/companies" ? "#104774" : "white"}`,
          alignItems: "center",
          backgroundColor: `${pathName === "/dashboard/companies" ? "white" : ""}`,
          //   var(--BorderRadiusborder-radius-md)
          // justifyContent: "space-between",
          "&:hover": {
            backgroundColor: "white", // Change background color on hover
            color: "text.secondary",
            transform: "scale(1.05)", // Optional: scale effect
            transition: "0.3s", // Smooth transition
          },
        }}
      >
        <Image src={"/sidebarIcons/companies.png"} width={22} height={22} alt={'Companies'} />
        <div>Companies</div>
      </Box>
      {data?.navMain?.map((element, idx) => {
        const sidePathName =
          pathName === element?.url ||
          element?.items?.some((item) => pathName === item?.url);
        return (
          <Box
            component={Link}
            href={element?.url}
            key={idx}
            sx={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => {
              if (selectedUrl === idx) {
                setSelectedUrl(null);
              } else {
                setSelectedUrl(idx);
              }
            }}
          >
            <Box
              sx={{
                display: "flex",
                direction: "row",
                textDecoration: "none",
                gap: "6px",
                paddingY: "8px",
                paddingX: "12px",
                borderRadius: "8px",
                cursor: "pointer",
                color: `${sidePathName ? "#104774" : "white"}`,
                alignItems: "center",
                backgroundColor: `${sidePathName ? "white" : ""}`,
                //   var(--BorderRadiusborder-radius-md)
                justifyContent: "space-between",
                "&:hover": {
                  backgroundColor: "white", // Change background color on hover
                  color: "text.secondary",
                  transform: "scale(1.05)", // Optional: scale effect
                  transition: "0.3s", // Smooth transition
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  direction: "row",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Image
                  src={element?.img}
                  width={22}
                  height={22}
                  alt={element?.title}
                />
                <div>{element?.title}</div>
              </Box>
              <Box
                xs={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {sidePathName ? (
                  <ExpandMoreIcon color="text" fontSize="30px" />
                ) : (
                  <ArrowForwardIosIcon color="text" fontSize="10px" />
                )}
              </Box>
            </Box>
            {sidePathName && (
              <Box
                sx={{
                  backgroundColor: "#FFFFFF17",
                  marginTop: "6px",
                  padding: "10px 12px 10px 12px",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {element?.items &&
                  element?.items?.map((item, index) => {
                    const path = pathName === item.url;
                    return (
                      <Box
                        sx={{
                          textDecoration: "none",
                          color: `text.primary`,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                          padding: "8px 16px 8px 16px",
                          borderRadius: "8px",
                          color: "white",
                        }}
                        style={{ background: path ? "#104774" : "" }}
                        component={Link}
                        href={item?.url}
                      >
                        <div
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "100%",
                            borderColor: "white",
                            border: "2px solid white",
                          }}
                        ></div>
                        {item?.title}
                       </Box>
                    );
                  })}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default Sidebar;
