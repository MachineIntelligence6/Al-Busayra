"use client";

import { Box, Card, Typography, Avatar, IconButton } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import DoneIcon from "@mui/icons-material/Done";
import CustomButton from "@/components/shared-components/CustomButton";

import { GeneralInfoView } from "./General-info";
import { ContactInfoView } from "./Contact-info";
import { DrivingLicenseView } from "./Driving-license";
import { PassportDetailsView } from "./Passport-details";
import { ReferralView } from "./Referral";
import { StatusDropdown } from "@/components/shared-components/CustomColoredDropdown";


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




export default function ProfileView({ isModalRemarkOpen, status, setStatus, handleChange, handleEdit, handleOptionClick, handleProceed }) {

  return (
    <Box sx={{ pt: 2 }}>
      <Card sx={{ mb: 3 }}>
        <Box
          sx={{
            height: 120,
            background:
              "url(/icons/banner1.svg) lightgray 50% / cover no-repeat",
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
              <Typography sx={{ fontSize: 25, fontWeight: 500, color: "#2F2B3DE5" }}>{profile.fullName}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
              <StatusDropdown
                value={status}
                onChange={handleChange}
                disabled={false}
                error={false}
                onOptionClick={handleOptionClick}
                placeholder="status"
              // ... any other Select props
              />
              <CustomButton
                variant="contained"
                endIcon={<DoneIcon sx={{ width: "15px" }} />}
                sx={{ mt: 2 }}
                type="button"
                onClick={handleProceed}
              >
                Proceed
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Card>

      {/* <StatusAlert
        message={
          status === 'not_Qualified'
            ? "Reason: Your reason will appear here"
            : "Application is on hold"
        }
        status="status"
        type={status === 'not_qualified' ? 'not_Qualified' : 'hold'}
      /> */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // For extra-small and small screens
            sm: "1fr", // Optionally specify for small screens (e.g., tablets)
            md: "1fr 1fr", // For medium and larger screens
          },
          gap: 2,
        }}
      >
        <GeneralInfoView
          profile={profile}
          onEdit={() => handleEdit("General Info")}
        />
        <ContactInfoView
          profile={profile}
          onEdit={() => handleEdit("Contact Info")}
        />
        <DrivingLicenseView
          profile={profile}
          onEdit={() => handleEdit("Driving License")}
        />
        <PassportDetailsView
          profile={profile}
          onEdit={() => handleEdit("Passport Details")}
        />
        <ReferralView profile={profile} onEdit={() => handleEdit("Referral")} />
      </Box>
    </Box>
  );
}
