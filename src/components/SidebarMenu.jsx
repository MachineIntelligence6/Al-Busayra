"use client";
import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AppLogo from "./Shared-components/AppLogo";
import SvgIcon from "./Shared-components/SvgIcon";
import Link from "next/link";

const SidebarMenu = ({ menuData }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        menuData?.forEach((menu) => {
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
    }, [pathname, menuData]);

    const handleToggle = (id) => {
        setOpenMenu((prev) => (prev === id ? null : id));
    };

    return (
        <Box
            component="aside"
            sx={{
                minWidth: 300,
                bgcolor: "#23567F",
                color: "white",
                height: "100vh",
                padding: "1rem",
            }}
        >
            <Box component="div" sx={{ width: "100%", borderBottom: "2px solid white", py: 2 }}>
                <AppLogo type="light" />
            </Box>
            <List>
                {menuData?.map((menu) => (
                    <Box key={menu.id} sx={{ mb: 1, "& .MuiListItemText-root": { margin: 0 } }}>
                        {/* Simple Route */}
                        {!menu.item && (
                            <ListItem disablePadding>
                                <Link href={menu.url} style={{ width: "100%" }}>
                                    <ListItemButton
                                        sx={styleProp(menu, openMenu)}
                                    >
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
                                <Collapse in={openMenu === menu.id} timeout="auto" unmountOnExit>
                                    <List component="div" sx={{ bgcolor: "#37658B", mt: 1, borderRadius: 2, p: 2 }}>
                                        {menu.item.map((subItem) => (
                                            <ListItem key={subItem.id} disablePadding sx={{ pb: 1 }}>
                                                <Link href={subItem.url} style={{ width: "100%" }}>
                                                    <ListItemButton
                                                        sx={{
                                                            borderRadius: 2,
                                                            bgcolor: subItem.id === selectedMenu ? "white" : "#37658B",
                                                            color: subItem.id === selectedMenu ? "#37658B" : "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 2,
                                                            "&:hover": { bgcolor: "#1E4568", color: "white" },
                                                        }}
                                                    >
                                                        <RadioButtonUncheckedIcon fontSize="small" />
                                                        <ListItemText
                                                            primary={subItem.label}
                                                            primaryTypographyProps={{
                                                                fontWeight: subItem.id === selectedMenu ? "400" : "normal",
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
        </Box>
    );
};

export default SidebarMenu;

const styleProp = (menu, openMenu) => {
    return {

        borderRadius: 2,
        bgcolor: openMenu === menu.id ? "#fff" : "#23567F",
        color: openMenu === menu.id ? "#23567F" : "white",
        display: "flex", alignItems: "center", gap: 2,
        "&:hover": { bgcolor: "#1E4568", color: "white" },

    }
}
