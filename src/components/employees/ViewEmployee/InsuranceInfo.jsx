import { Box, IconButton, Divider } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";

export function InsuranceInfo({ profile, onEdit }) {
  return (
    <ViewCard title="Medical/Accidental insurance" onEdit={onEdit}>
      <ViewItem
        label="Medical Insurance"
        value={profile.insurance.medCompany}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem
        label="Medical Insurance Start Date"
        value={profile.insurance.startDate}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem
        label="Medical Insurance End Date"
        value={profile.insurance.endDate}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
      <ViewItem
        label="Accidental Insurance"
        value={profile.insurance.accCompany}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
      <ViewItem
        label="Accidental Start Date"
        value={profile.insurance.startDate}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
      <ViewItem label="Accidental End Date" value={profile.insurance.endDate} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
    </ViewCard>
  );
}
