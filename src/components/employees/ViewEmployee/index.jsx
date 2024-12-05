import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const ViewEmployee = () => {
  const sections = [
    {
      title: "Basic Information",
      details: [
        { label: "Full Name", value: "Saleem Akhtar" },
        { label: "Gender", value: "Male" },
        { label: "Date of Birth", value: "29 Sep 1988" },
        { label: "Religion", value: "Islam" },
        { label: "Nationality", value: "UAE" },
        { label: "Marital Status", value: "Married" },
        { label: "Employment Type", value: "Rider" },
      ],
    },
    {
      title: "Residence/Contact Details",
      details: [
        { label: "Email Address", value: "saleem@gmail.com" },
        { label: "Contact Number (UAE)", value: "+971 123 456 7890" },
        { label: "Emergency Contact Relation (UAE)", value: "Uncle" },
        { label: "Emergency Contact Number (UAE)", value: "+971 987 654 3210" },
        { label: "Country", value: "United Arab Emirates" },
        { label: "City", value: "Dubai" },
      ],
    },
  ];

  return (
    <Box sx={{ marginTop: "16px" }}>
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FFF",
          borderRadius: "10px",
          border: "1.5px solid rgba(47, 43, 61, 0.15)",
          boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.15)",
          marginBottom: "16px",
          height: "300px",
        }}
      >
        <Box
          sx={{
            height: "200px",
            background:
              'url("/icons/banner1.svg") lightgray 50% / cover no-repeat',
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        ></Box>
        <Box
          sx={{
            top: "150px",
            left: "25px",
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <img src="/icons/pic.svg" alt="Pic" />
            <Box>
              <img
                src="/icons/Camera.svg"
                alt="Camera"
                className="absolute bottom-[76px] left-28 "
              />
            </Box>
          </Box>

          <Typography
            sx={{
              marginLeft: "16px",
              fontSize: "25px",
              fontWeight: 500,
              color: "#2F2B3DE5",
            }}
          >
            Saleem Akhtar
          </Typography>
        </Box>
      </Box>

      {/* Grid Section */}
      <Box>
        <Grid container spacing={2}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
              <Card
                elevation={3}
                sx={{
                  flex: 1, // Stretch the card to fill available space
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {section.title}
                    </Typography>
                    <IconButton size="small" color="primary">
                      <EditIcon />
                    </IconButton>
                  </Stack>
                  {section.details.map((detail, idx) => (
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      key={idx}
                      mb={1}
                    >
                      <Typography variant="body2" fontWeight="bold">
                        {detail.label}:
                      </Typography>
                      <Typography variant="body2">{detail.value}</Typography>
                    </Stack>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ViewEmployee;
