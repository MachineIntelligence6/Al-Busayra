import { Box, IconButton, Divider } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";

export function OtherInfo({ profile, onEdit }) {
  return (
    <ViewCard title="Other Details" onEdit={onEdit}>
      <ViewItem
        label="Passport Handed Over To Representive"
        value={profile.other.passportOverTo}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem
        label="Name of Representative Passport Taken"
        value={profile.other.passportReciever}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem
        label="Picture of Passport Once We Received From Rider"
        value={profile.other.passCopy}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
      <ViewItem label="RTA Training" value={profile.other.rtaTraining} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
      <ViewItem label="Applied Via" value={profile.other.appliedVia} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
      <ViewItem label="EMP Ownership" value={profile.other.empOwnership} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
      <ViewItem label="EMP Status" value={profile.other.empStatus} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
    </ViewCard>
  );
}
