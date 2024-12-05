import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";
import { Divider } from "@mui/material";

export function EmiratesId({ profile, onEdit }) {
  return (
    <ViewCard title="Emirates ID" onEdit={onEdit}>
      <ViewItem label="Emirates ID" value={profile.emiratesId.number} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem label="EID Issue Date" value={profile.emiratesId.issueDate} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem label="EID Expiry Date" value={profile.emiratesId.expiryDate} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem label="EID Copy Front" value={profile.emiratesId.copyFront} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem label="EID Copy Back" value={profile.emiratesId.copyBack} />
    </ViewCard>
  );
}
