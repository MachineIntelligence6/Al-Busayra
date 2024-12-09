"use client";

import { Box, Card, Typography, Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { GeneralInfoView } from "./General-info";
import { ContactInfoView } from "./Contact-info";
import { DrivingLicenseView } from "./Driving-license";
import { PassportDetailsView } from "./Passport-details";
import { ReferralView } from "./Referral";
import CustomButton from "@/components/Shared-components/CustomButton";
import DoneIcon from "@mui/icons-material/Done";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CustomColoredDropdown from "@/components/Shared-components/CustomColoredDropDown";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const statusOptions = [
  {
    label: "Not Qualified",
    value: "not_qualified",
    color: "#EF4444",
    backgroundColor: "#FEE2E2",
    icon: "AlertCircle",
  },
  { label: "Hold", value: "hold", color: "#F59E0B", icon: "Clock" },
  {
    label: "Qualified",
    value: "qualified",
    color: "#10B981",
    backgroundColor: "#D1FAE5",
    icon: "CheckCircle",
  },
];

const profile = {
  fullName: "Saleem Akhtar",
  gender: "Male",
  campaignName: "Walking 2024",
  uaeResidentStatus: "Non-UAE Resident",
  employeeStatus: "Full Time",
  preferredWorkingCountry: "United Arab Emirates",
  preferredWorkingCity: "Dubai",
  howDidYouLearn: "Agent",
  contactInfo: {
    email: "saleemakhtar@gmail.com",
    phone: "+971 123 456 7890",
    whatsapp: "+971 0987 654 321",
    currentCountry: "Pakistan",
    nationality: "Pakistan",
  },
  drivingLicense: {
    isHolder: true,
    number: "8793456293",
    issueDate: "20-10-2020",
    expiryDate: "20-10-2028",
  },
  passport: {
    number: "ABC0-234353",
    issueDate: "20-10-2020",
    expiryDate: "20-10-2028",
    copy: "passport.pdf",
    visaStatus: "Applied",
  },
  referral: {
    referredBy: "John Smith",
    referralPhone: "+971 123 456 7890",
    referralAddress: "Street, 08, Jamal Resident, UAE",
  },
};

export default function ProfileView() {
  const handleEdit = (section) => {
    console.log(`Editing ${section}`);
    // Add your edit logic here
  };

  const handleStatusChange = (value) => {
    console.log("Status changed to:", value);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ mb: 3 }}>
        <Box
          sx={{
            height: 120,
            background: "linear-gradient(45deg, #1a237e 30%, #283593 90%)",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23283593' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
        <Box sx={{ px: 3, pb: 2, mt: -5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "baseline" }}>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  src="https://example.com/images/profile-aisha.jpg"
                  sx={{
                    width: 100,
                    height: 100,
                    border: "4px solid white",
                    borderRadius: "10px",
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: -10,
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "white" },
                  }}
                  size="small"
                >
                  <CameraAltOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
              <Typography variant="h5">{profile.fullName}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* <CustomColoredDropdown
        options={statusOptions}
        defaultValue="not_qualified"
        onChange={handleStatusChange}
        buttonColor="#ED4545"
        buttonTextColor="white"
        leftIcon={HighlightOffOutlinedIcon}
        rigthIcon={ExpandMoreOutlinedIcon}
      /> */}
              <CustomButton
                variant="contained"
                endIcon={<DoneIcon sx={{ width: "15px" }} />}
                sx={{ mt: 2 }}
                type="button"
                onClick=""
              >
                Procced
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Card>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box sx={{ width: "calc(50% - 8px)", height: "100%" }}>
          <GeneralInfoView
            profile={profile}
            onEdit={() => handleEdit("General Info")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "100%" }}>
          <ContactInfoView
            profile={profile}
            onEdit={() => handleEdit("Contact Info")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "100%" }}>
          <DrivingLicenseView
            profile={profile}
            onEdit={() => handleEdit("Driving License")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "100%" }}>
          <PassportDetailsView
            profile={profile}
            onEdit={() => handleEdit("Passport Details")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "100%" }}>
          <ReferralView
            profile={profile}
            onEdit={() => handleEdit("Referral")}
          />
        </Box>
      </Box>
    </Box>
  );
}
