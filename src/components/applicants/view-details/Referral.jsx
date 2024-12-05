import { InfoCard, InfoItem } from "@/components/Shared-components/CustomInfoCard";

export function ReferralView({ profile, onEdit }) {
  return (
    <InfoCard title="REFERRAL" onEdit={onEdit}>
      <InfoItem label="Referred By" value={profile.referral.referredBy} />
      <InfoItem label="Referral Phone" value={profile.referral.referralPhone} />
      <InfoItem label="Referral Address" value={profile.referral.referralAddress} />
    </InfoCard>
  );
}

