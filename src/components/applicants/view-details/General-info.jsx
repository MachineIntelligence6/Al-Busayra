import { InfoCard, InfoItem } from "@/components/Shared-components/CustomInfoCard";

export function GeneralInfoView({ profile, onEdit }) {
  return (
    <InfoCard title="GENERAL INFORMATION" onEdit={onEdit}>
      <InfoItem label="Full Name" value={profile.fullName} />
      <InfoItem label="Gender" value={profile.gender} />
      <InfoItem label="Campaign Name" value={profile.campaignName} />
      <InfoItem label="UAE / Non UAE Resident" value={profile.uaeResidentStatus} />
    </InfoCard>
  );
}

