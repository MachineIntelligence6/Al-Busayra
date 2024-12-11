import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ActionMenu = ({ menuItems = [], onMenuItemClick }) => {
    console.log(menuItems,"menuItems");
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (menuItem) => {
        if (onMenuItemClick) {
            onMenuItemClick(menuItem);
        }
        handleCloseMenu();
    };

    return (
        <>
            <IconButton
                aria-label="more-options"
                aria-controls="more-options-menu"
                aria-haspopup="true"
                onClick={handleOpenMenu}
            >
                <MoreVertIcon color="#80839029"/>
            </IconButton>
            <Menu
                id="more-options-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5, // Limit menu height
                        width: "200px",
                        padding: "px" ,
                        borderRadius:"7px"
                    },
                }}
            >
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => handleMenuItemClick(item)}
                        sx={{ "&:hover": { color: "#23567f", borderRadius:"7px", background: "#1047741A"} }}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default ActionMenu;
