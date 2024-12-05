import { Box, Card, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import Filters from "@/app/components/CompaniesComponents/Filters";

function View() {
  const userData = {
    Name: "Zaheer Abbas",
    Email_Address: "zaheer@albusayradelivery.com",
    Website: "www.al-busayra.com",
    Phone_Number: "+971 123 456 7890",
    Industry: "Delivery Services",
    Country: "United Arab Emirates",
    "State/Province": "Dubai",
    City: "Dubari",
    Locations: "Dubai, Sharjah, Ajman",
    Business_Address:
      "Office no N12, first floor  G9, building al majaz sharjha",
    Status: "Active",
  };
  const d = [
    {
      img: "",
      name: "Total Users",
      count: 50,
      color: "#01AB9C",
    },
    {
      img: "",
      name: "Active Users",
      count: 50,
      color: "#CA4F8E",
    },
    {
      img: "",
      name: "Inactive Users",
      count: 50,
      color: "#FFAC30",
    },
  ];
  return (
    <Box
      container
      spacing={2}
      sx={{ display: "flex", flexDirection: "row", gap: "15px", mt: 5 }}
    >
      <Box item xs={12} md={4}>
        <Card
          sx={{
            backgroundColor: "#062A47",
            borderRadius: "25px",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}>
            <Box
              sx={{
                width: "66px",
                height: "66px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src="/icon1.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography variant="h6" sx={{ color: "white" }}>
              AL-BUSAYRA
            </Typography>
          </Box>

          <Divider />
          <Box>
            {Object.entries(userData).map(([key, value]) => (
              <Box
                key={key}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  py: 2,
                  px: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFFB2",
                    fontSize: "13px",
                    fontWeight: "medium",
                  }}
                >
                  {key}
                </Typography>
                <Typography
                  sx={{
                    color: "#FFFFFFE5",
                    fontSize: "13px",
                    fontWeight: "medium",
                  }}
                >
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Box>

      <Box
        width={"100%"}
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              width: "100%",
            }}
          >
            {d.map((element, idx) => (
              <Box
                style={{ maxWidth: "381px", width: "100%" }}
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "381px",
                  width: "100%",
                }}
              >
                <Card
                  sx={{
                    backgroundColor: element.color,
                    width: "100%",
                    borderRadius: "25px",
                    paddingY: "20px",
                    paddingX: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "6px",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          borderRadius: "50%",
                          border: `1px solid ${element.color}`,
                          width: "21px",
                          height: "21px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <DoneOutlinedIcon
                          sx={{
                            color: element.color,
                            width: "10px",
                            height: "10px",
                          }}
                        />
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      {element.name}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{ color: "white", textAlign: "end" }}
                  >
                    {element.count}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
        <Card sx={{ borderRadius: "25px" }}>{/* <Filters/> */}</Card>
      </Box>
    </Box>
  );
}

export default View;
