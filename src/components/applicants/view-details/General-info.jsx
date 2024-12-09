import { InfoCard, InfoItem } from "@/components/Shared-components/CustomInfoCard";

export function GeneralInfoView({ profile, onEdit }) {
  return (
    <InfoCard title="GENERAL INFORMATION" onEdit={onEdit}>
      <InfoItem label="Full Name" value={profile.fullName} />

      <InfoItem label="Gender" value={profile.gender} icon="🚹"/>
      <InfoItem label="Campaign Name" value={profile.campaignName} icon="🚹"/>
      <InfoItem label="UAE / Non UAE Resident" value={profile.uaeResidentStatus} icon="🚹"/>
    </InfoCard>
  );
}

