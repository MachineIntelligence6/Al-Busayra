"use client";

import {
  Box,
  Card,
  Typography,
  Avatar,
  IconButton,
  Divider,
} from "@mui/material";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BasicInfo from "./BasicInfo";
import { ContactDetail } from "./ContactDetails";
import { DLInfo } from "./DLInfo";
import { PassportInfo } from "./PassportInfo";
// import { ReferralView } from "./Referral";
import CustomButton from "@/components/Shared-components/CustomButton";
import DoneIcon from "@mui/icons-material/Done";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { EmiratesId } from "./EmiratesId";
import { VisaInfo } from "./VisaInfo";
import { InsuranceInfo } from "./InsuranceInfo";
import { OtherInfo } from "./OtherInfo";
// import CustomColoredDropdown from "@/components/Shared-components/CustomColoredDropDown";
// import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
// import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const profile = {
  fullName: "Saleem Akhtar",
  gender: "Male",
  dob: "29 Sep 1988",
  religion: "Islam",
  nationality: "UAE",
  maritalStatus: "Married",
  employmentType: "Rider",

  contactInfo: {
    email: "saleemakhtar@gmail.com",
    phone: "+971 123 456 7890",
    eContactRelation: "Uncle",
    eContactNo: "+971 987 654 3210",
    country: "United Arab Emirates",
    city: "Dubai",
  },
  emiratesId: {
    number: "784-2001-4608152-4",
    issueDate: "20-10-2020",
    expiryDate: "20-10-2028",
    copyFront: "id.pdf",
    copyBack: "id.pdf",
  },

  drivingLicense: {
    number: "8793456293",
    issueDate: "20-10-2020",
    expiryDate: "20-10-2028",
    copyFront: "license.pdf",
    copyBack: "license.pdf",
  },
  passport: {
    number: "ABC0-234353",
    issueDate: "20-10-2020",
    expiryDate: "20-10-2028",
    copy: "passport.pdf",
  },
  visa: {
    number: "ABC0-234353",
    issueDate: "20-10-2020",
    expiryDate: "20-10-2028",
    iqamaCopy: "passport.pdf",
  },
  insurance: {
    medCompany: "Jubliee Insurance",
    startDate: "20-10-2020",
    endDate: "20-10-2028",
    accCompany: "Reliance Insurance",
    startDate: "20-10-2020",
    endDate: "20-10-2028",
  },
  other: {
    passportOverTo: "Atif",
    passportReciever: "Atif",
    passCopy: "passport.pdf",
    rtaTraining: "2143221",
    appliedVia: "4PL",
    empOwnership: "Own",
    empStatus: "Active",
  },
};

const EmployeeView = () => {
  const handleEdit = (section) => {
    console.log(`Editing ${section}`);
    // Add your edit logic here
  };

  // const handleStatusChange = (value) => {
  //   console.log("Status changed to:", value);
  // };

  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ mb: 3 }}>
        <Box
          sx={{
            height: 120,
            // background: "linear-gradient(45deg, #1a237e 30%, #283593 90%)",
            // backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23283593' fill-opacity='0.4'/%3E%3C/svg%3E")`,
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
              <Typography variant="h5">{profile.fullName}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

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
        <Box sx={{ width: "calc(50% - 8px)", height: "full" }}>
          <BasicInfo
            profile={profile}
            onEdit={() => handleEdit("Basic Info")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "full" }}>
          <ContactDetail
            profile={profile}
            onEdit={() => handleEdit("Contact Info")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "full" }}>
          <EmiratesId
            profile={profile}
            onEdit={() => handleEdit("Emirates Id")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "full" }}>
          <DLInfo
            profile={profile}
            onEdit={() => handleEdit("Driving License")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "full" }}>
          <PassportInfo
            profile={profile}
            onEdit={() => handleEdit("Passport Details")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "full" }}>
          <VisaInfo
            profile={profile}
            onEdit={() => handleEdit("Visa Details")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "full" }}>
          <InsuranceInfo
            profile={profile}
            onEdit={() => handleEdit("Visa Details")}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 8px)", height: "full" }}>
          <OtherInfo
            profile={profile}
            onEdit={() => handleEdit("Visa Details")}
          />
        </Box>

      </Box>
    </Box>
  );
}

export default EmployeeView