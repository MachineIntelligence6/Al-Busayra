import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";
import { Divider } from "@mui/material";

export function ContactDetail({ profile, onEdit }) {
  return (
    <ViewCard title="Residence/Contact Details" onEdit={onEdit}>
      <ViewItem label="Email Address" value={profile.contactInfo.email} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1  }} />
      <ViewItem
        label="Emergency Contact Number (UAE)"
        value={profile.contactInfo.phone}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1  }} />
      <ViewItem
        label="Emergency Contact Relation (UAE)"
        value={profile.contactInfo.eContactRelation}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1  }} />

      <ViewItem
        label="Emergency Contact Number (UAE)"
        value={profile.contactInfo.eContactNo}
      />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1  }} />

      <ViewItem label="Country" value={profile.contactInfo.country} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1  }} />

      <ViewItem label="City" value={profile.contactInfo.city} />

    </ViewCard>
  );
}
