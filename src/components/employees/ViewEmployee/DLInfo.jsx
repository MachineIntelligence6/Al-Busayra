import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";
import { Divider } from "@mui/material";

export function DLInfo({ profile, onEdit }) {
  return (
    <ViewCard title="DRIVING LICENSE" onEdit={onEdit}>
      <ViewItem
        label="Driving license No."
        value={profile.drivingLicense.number}
      />
      <Divider sx={{ borderStyle: "dotted", margin: 0 }} />

      <ViewItem
        label="Driving license Issue Date"
        value={profile.drivingLicense.issueDate}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem
        label="Driving license Expiry Date"
        value={profile.drivingLicense.expiryDate}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1}} />

      <ViewItem
        label="Driving license Copy Front"
        value={profile.drivingLicense.copyFront}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1}} />

      <ViewItem
        label="Driving license Copy Back"
        value={profile.drivingLicense.copyBack}
      />
    </ViewCard>
  );
}
