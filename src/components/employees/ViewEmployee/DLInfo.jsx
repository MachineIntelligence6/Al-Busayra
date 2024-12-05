import {
  ViewCard,
  ViewItem,
} from "@/components/Shared-components/ViewCard";

export function DLInfo({ profile, onEdit }) {
  return (
    <ViewCard title="DRIVING LICENSE" onEdit={onEdit}>
      <ViewItem label="License Number" value={profile.drivingLicense.number} />
      <ViewItem label="Issue Date" value={profile.drivingLicense.issueDate} />
      <ViewItem label="Expiry Date" value={profile.drivingLicense.expiryDate} />
    </ViewCard>
  );
}
