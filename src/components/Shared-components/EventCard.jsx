"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import { Box, Divider, FormControlLabel, FormGroup } from "@mui/material";
import Image from "next/image";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import { useRouter } from "next/navigation";
import IOSSwitch from "../ui/switch-button";


// Reusable EventCard Component
const EventCard = ({ event }) => {
  const route = useRouter();
  const {
    eventName,
    totalApplied,
    creationDate,
    description,
    startDate,
    endDate,
    link,
    active,
    onDelete,
    onEdit,
    onSwitchChange,
    bgColor = ["#4F71EA", "#1AA1D1"],
  } = event;
  const [checked, setChecked] = React.useState(active);

  // Handle switch toggle
  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
    if (onSwitchChange) onSwitchChange(event.target.checked);
  };

  return (


    <Card
      component="div"
      sx={{
        maxWidth: 480,
        background: `linear-gradient(123deg, ${bgColor[0]}, ${bgColor[1]})`,
        borderRadius: "20px",
        py: "20px",
        px: "10px",
        color: "#FFF",
        width: "100%",
        flex: "1 1 calc(33.33% - 16px)",
        cursor: "pointer",
        "&:active": {
          background: `linear-gradient(123deg, ${bgColor[1]}, ${bgColor[1]})`,
        },
      }}
      onClick={() => route.push("/campaigns/campaign-users")}
    >
      {/* Header Section */}
      <Box
        sx={{
          border: 2,
          borderRadius: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: "8px",
          px: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <img src="/icons/telicon.svg" alt="telicon" />
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            Total Applied
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
          {totalApplied}
        </Typography>
      </Box>

      {/* Card Content */}
      <CardContent>
        {/* Divider Line */}
        <Box sx={{ borderTop: 2, borderStyle: "dotted" }}></Box>

        {/* Event Details */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
            mb: 2,
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            {eventName}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Created on: {creationDate}
          </Typography>
        </Box>
        <Typography>{description}</Typography>

        {/* Date Information */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "8px",
            mb: "10px",
            textDecoration: "underline",
          }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
            From: {startDate}
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
            To: {endDate}
          </Typography>
        </Box>

        {/* Link to Platform */}
        {/* Optional: Link to platform if provided */}
        {link && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "37px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#104774",
                width: "fit-content",
                py: "7px",
                px: "9px",
                borderRadius: "34px 0px 0px 34px",
                color: "#FFF",
                fontSize: "15px",
              }}
            >
              Link
            </Box>
            <Link
              href={link}
              sx={{
                color: "#104774",
                backgroundColor: "#FFF",
                height: "100%",
                alignItems: "center",
                display: "flex",
                color: "#104774",
                fontSize: "15px",
                px: "6px",
                width: "100%",
              }}
              target="_blank"
            >
              {link}
            </Link>
            <Box
              sx={{
                backgroundColor: "#104774",
                py: "10px",
                px: "9px",
                borderRadius: "0px 35px 35px 0px",
              }}
            >
              <Image src="/icons/copy.svg" alt="copy" width={18} height={24} />
            </Box>
          </Box>
        )}

        {/* Divider Line */}
        <Box sx={{ borderTop: 2, borderStyle: "dotted", mt: 1 }}></Box>
      </CardContent>

      {/* Card Actions */}
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            fontWeight: "normal",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Active
          <FormGroup>
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 2 }}
                  defaultChecked
                  onChange={handleSwitchChange}
                />
              }
            // label="Active"
            />
          </FormGroup>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<DeleteForeverOutlinedIcon />}
            size="small"
            onClick={onDelete} // Pass delete handler from props
            sx={{
              color: "#FFF",
              backgroundColor: "#EB5757",
              fontWeight: "medium",
            }}
          >
            Delete
          </Button>

          <Button
            variant="contained"
            startIcon={<BorderColorSharpIcon fontSize="small" />}
            size="small"
            onClick={onEdit} // Pass edit handler from props
            sx={{
              color: "#104774",
              backgroundColor: "#F2F2F2",
              fontWeight: "medium",
            }}
          >
            Edit
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default EventCard;
