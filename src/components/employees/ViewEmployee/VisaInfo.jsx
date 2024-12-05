import { Box, IconButton, Divider } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";

export function VisaInfo({ profile, onEdit }) {
  return (
    <ViewCard title="Visa Details" onEdit={onEdit}>
      <ViewItem label="UAE residency / Iqama No." value={profile.visa.number} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem label="Visa Issue Date" value={profile.visa.issueDate} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem label="Visa Expiry Date" value={profile.visa.expiryDate} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem
        label="UAE residency / Iqama Copy "
        value={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <span>{profile.visa.iqamaCopy}</span>
            {/* <IconButton size="small">
              <VisibilityIcon />
            </IconButton> */}
          </Box>
        }
      />
    </ViewCard>
  );
}
