import { ViewCard, ViewItem } from "@/components/Shared-components/ViewCard";

export default function BasicInfo({ profile, onEdit }) {
  return (
    <ViewCard title="BASIC INFORMATION" onEdit={onEdit}>
      <ViewItem label="Full Name" value={profile.fullName} />
      <ViewItem label="Gender" value={profile.gender} />
      <ViewItem label="Campaign Name" value={profile.campaignName} />
      <ViewItem label="UAE / Non UAE Resident" value={profile.uaeResidentStatus} />
    </ViewCard>
  );
}