"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import AppLogo from "./Shared-components/AppLogo";
import SvgIcon from "./Shared-components/SvgIcon";
import Link from "next/link";
import CompanyProfileMiniCard from "./Shared-components/profiles/CompanyProfileMiniCard";
import { BellDot, Circle } from "lucide-react";
import DescriptiveText from "./Shared-components/DescriptiveText";
import { custom } from "@/app/theme";
import SidebarProfileCard from "./Shared-components/SidebarProfileCard";

const SidebarMenu = ({ adminMenuData, portal = "admin" }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    adminMenuData?.forEach((menu) => {
      if (menu.item) {
        menu.item.forEach((subItem) => {
          if (pathname === subItem.url) {
            setSelectedMenu(subItem.id);
            setOpenMenu(menu.id);
          }
        });
      } else if (pathname === menu.url) {
        setSelectedMenu(menu.id);
      }
    });
  }, [pathname, adminMenuData]);

  const handleToggle = (id) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <Box
      component="aside"
      sx={{
        minWidth: 300,
        width: 280,
        bgcolor: "#23567F",
        color: "white",
        height: "100vh",
        minHeight: "100vh",
        padding: "1rem 1rem 0rem 1rem",
        overflowY: "auto",
        scrollbarWidth: "none",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box
          component="div"
          sx={{ width: "100%", borderBottom: "2px solid white", py: 4 }}
        >
          <AppLogo type="light" />
        </Box>
        {portal === "company" && (
          <Box
            sx={{
              width: "100%",
              borderBottom: "2px solid white",
              py: 3,
              mb: 2,
            }}
          >
            <CompanyProfileMiniCard />
          </Box>
        )}
      </Box>
      <List sx={{ py: 2, height: "100%" }}>
        {adminMenuData?.map((menu) => (
          <Box
            key={menu.id}
            sx={{ mb: 1, "& .MuiListItemText-root": { margin: 0 } }}
          >
            {/* Simple Route */}
            {!menu.item && (
              <ListItem disablePadding>
                <Link
                  href={menu.url}
                  style={{ width: "100%", textDecoration: "none" }}
                >
                  <ListItemButton sx={styleProp(menu, openMenu)}>
                    <SvgIcon src={menu.icon} />
                    <ListItemText
                      primary={menu.title}
                      primaryTypographyProps={{
                        fontWeight: selectedMenu === menu.id ? "500" : "normal",
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            )}

            {/* Dropdown Menu */}
            {menu.item && (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleToggle(menu.id)}
                    sx={styleProp(menu, openMenu)}
                  >
                    <SvgIcon src={menu.icon} />
                    <ListItemText
                      primary={menu.title}
                      primaryTypographyProps={{
                        fontWeight: openMenu === menu.id ? "500" : "normal",
                      }}
                    />
                    {openMenu === menu.id ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>

                {/* Dropdown Items */}
                <Collapse
                  in={openMenu === menu.id}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    sx={{
                      bgcolor: "#37658B",
                      borderRadius: 2,
                      maxHeight: 255, // Set a max height for the collapse menu
                      overflowY: "auto", // Force scrollbar to show at all times
                      scrollbarWidth: "none",
                      px: 1,
                      mt: 1,
                    }}
                  >
                    {menu.item.map((subItem) => (
                      <ListItem key={subItem.id} disablePadding sx={{ pb: 1 }}>
                        <Link
                          href={subItem.url}
                          style={{ width: "100%", textDecoration: "none" }}
                        >
                          <ListItemButton
                            sx={{
                              borderRadius: 2,
                              bgcolor:
                                subItem.id === selectedMenu ? "#104774" : "",
                              color: subItem.id === selectedMenu ? "white" : "",
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                              "&:hover": { bgcolor: "#1E4568", color: "white" },
                            }}
                          >
                            <Circle size={9} color={"white"} />
                            <ListItemText
                              primary={subItem.label}
                              primaryTypographyProps={{
                                fontWeight: 400,
                                fontSize: 15,
                              }}
                            />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </Box>
        ))}
      </List>
      <Box sx={{ width: "100%", px: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <BellDot />
            <DescriptiveText text="Notifications" color={"F7F7F7"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: 1.5,
              py: 0.3,
              borderRadius: 1.5,
              bgcolor: custom.errorDark,
              color: "#fff",
            }}
          >
            5
          </Box>
        </Box>
        <Box sx={{ my: 2 }}>
          <SidebarProfileCard
            fullName="Zaheer Abbas"
            email="Al Busayra delivery  services"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarMenu;

const styleProp = (menu, openMenu) => {
  return {
    borderRadius: 2,
    bgcolor: openMenu === menu.id ? "#fff" : "#23567F",
    color: openMenu === menu.id ? "#23567F" : "white",
    display: "flex",
    alignItems: "center",
    gap: 2,
    "&:hover": { bgcolor: "#1E4568", color: "white" },
  };
};
