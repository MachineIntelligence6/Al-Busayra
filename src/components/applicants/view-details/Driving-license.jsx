import { InfoCard, InfoItem } from "@/components/Shared-components/CustomInfoCard";

export function DrivingLicenseView({ profile, onEdit }) {
  return (
    <InfoCard title="DRIVING LICENSE" onEdit={onEdit}>
      <InfoItem label="License Number" value={profile.drivingLicense.number} />
      <InfoItem label="Issue Date" value={profile.drivingLicense.issueDate} />
      <InfoItem label="Expiry Date" value={profile.drivingLicense.expiryDate} />
    </InfoCard>
  );
}

