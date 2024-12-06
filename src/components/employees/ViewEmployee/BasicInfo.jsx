import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";
import { Box, Divider, IconButton } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

export default function BasicInfo({ profile, onEdit }) {
  return (
    <ViewCard title="BASIC INFORMATION" onEdit={onEdit}>
      <ViewItem
        value={profile.fullName}
        label={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* <IconButton size="small">
              <Person2OutlinedIcon />
            </IconButton> */}
            <span>Full Name</span>
          </Box>
        }
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem label="Gender" value={profile.gender} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem label="Date of Birth" value={profile.dob} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem label="Religion" value={profile.religion} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
      <ViewItem label="Nationality" value={profile.nationality} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
      <ViewItem label="Marital Status" value={profile.maritalStatus} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
      <ViewItem label="Employment Type" value={profile.employmentType} />
    </ViewCard>
  );
}
