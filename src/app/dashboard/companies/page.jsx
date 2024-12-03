"use client";
import { Box, Button, Divider, Tab, Tabs, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import CancelIcon from "@mui/icons-material/Cancel";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useCompaniesContext } from "@/context/companiesContext";
import CustomModal from "@/app/components/Modal/Modal";
import { CustomTabPanel, a11yProps } from "./ModalComponents/CustomFunctions";
import CompanyInfo from "./ModalComponents/CompanyInfo";
import ContactInfo from "./ModalComponents/ContactInfo";
import CompanyLocations from "./ModalComponents/CompanyLocations";
import SharedHeader from "@/app/components/SharedHeader/SharedHeader";
import CompaniesCard from "@/app/components/CompaniesComponents/CompaniesCard";
const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  width: "100%",
  maxWidth: 864,
  maxHeight: "90vh",
  height: "100%",
  overflow: "auto",
  boxShadow: 24,
  p: 4,
};
const modalStyles1 = {
  background: "",
  borderRadius: "8px",
  padding: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const tabsData = [
  {
    img: "/companyinfo.png",
    heading: "Company Info",
    caption: "Enter your company details",
  },
  {
    img: "/contactInfo.png",
    heading: "Contact Info",
    caption: "Enter your contact info",
  },
  {
    img: "/location.png",
    heading: "Company Locations",
    caption: "Select your company locations",
  },
];
export default function Page() {
  const [value, setValue] = useState(0);
  
  const { companies, addCompany, removeCompany, isModalOpen, setIsModalOpen } =
    useCompaniesContext();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const companiesData = [
    {
      img:'/icon1.png',
      name:'Al-Busaya',
      industry:'Delivery Services',
      country:'United Arab Emirates',
      email:'info@al-busayradelivery.com',
      phone:'+971 123 456 7890',
      color:'#6F79A8',
    },
    {
      img:'/icon1.png',
      name:'Al-Busaya',
      industry:'Delivery Services',
      country:'United Arab Emirates',
      email:'info@al-busayradelivery.com',
      phone:'+971 123 456 7890',
      color:'#DA7069',
    },
    {
      img:'/icon1.png',
      name:'Al-Busaya',
      industry:'Delivery Services',
      country:'United Arab Emirates',
      email:'info@al-busayradelivery.com',
      phone:'+971 123 456 7890',
      color:'#52AE7E'
    },
   ]
   useEffect(()=> {
    addCompany(companiesData)
   },[])
  return (
    <Grid>
      <SharedHeader isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Divider />
      {/* <CompaniesCard/> */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height={"100%"}
      >
       {
        companies?.length > 0 ? <CompaniesCard data = {companiesData}/> :
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Image src="/objectsimage.png" width={425} height={345} alt="" />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography variant="customSubtitle">
              No Companies Registered
            </Typography>
            <Typography variant="caption">
              Please click the button below to add a new company.
            </Typography>
          </Box>

          <Button
            style={{ maxWidth: "169px" }}
            variant="contained"
            color="primary"
            onClick={() => setIsModalOpen(true)}
          >
            <AddIcon /> Add Company
          </Button>
        </Box>
        }


      </Grid>
      <CustomModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          style={modalStyles}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box sx={{ width: "100%",marginBottom:'35px' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                {tabsData?.map((element, idx) => {
                  return (
                    <Tab
                      label={
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <Box
                            sx={modalStyles1}
                            style={{
                              background: `${
                                value === idx ? "#104774" : "#2F2B3D0F"
                              }`,
                            }}
                          >
                            <Image
                              src={element?.img}
                              width={22}
                              height={22}
                              alt="Company Info"
                            />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "start",
                            }}
                          >
                            <Typography variant="modalTabHead">
                              {element?.heading}
                            </Typography>
                            <Typography variant="modalTabCaption">
                              {element?.caption}
                            </Typography>
                          </Box>
                        </Box>
                      }
                      {...a11yProps(idx)}
                    />
                  );
                })}
              </Tabs>
              <CustomTabPanel value={value} index={0}>
                <CompanyInfo />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <ContactInfo />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <CompanyLocations />
              </CustomTabPanel>
            </Box>
              <Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop:`${'35px' }`,
                paddingBottom:`${value === 0 && '35px'}`
              }}
            >
              <Box>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  variant="outlined"
                  color="error"
                  sx={{
                    flexShrink: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <CancelIcon fontSize="20px" /> Cancel
                </Button>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <Button
                  onClick={() => {
                    if (value === 0) {
                      return;
                    } else {
                      setValue((prev) => prev - 1);
                    }
                  }}
                  variant="contained"
                  color="modalButton"
                >
                  {" "}
                  <KeyboardBackspaceIcon /> Previous
                </Button>
                <Button
                  onClick={() => {
                    if (value === 2) {
                      setIsModalOpen(false);
                      setValue(0);
                    } else {
                      setValue((prev) => prev + 1);
                    }
                  }}
                  variant="contained"
                  color="primary"
                  sx={{ display: "flex", gap: "4px" }}
                >
                  Next <DoneIcon fontSize="10px" />
                </Button>
              </Box>
            </Box>
            </Box>
          </Box>
        </CustomModal>
    </Grid>
  );
}
