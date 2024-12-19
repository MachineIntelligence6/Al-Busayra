import { InfoCard, InfoItem } from "@/components/shared-components/CustomInfoCard";
import { MapIcon, PhoneIcon, UserCircleIcon } from "@/utils/Icons";

export function ReferralView({ profile, onEdit }) {
  return (
    <InfoCard title="REFERRAL" onEdit={onEdit}>
      <InfoItem label="Referred By" value={profile.referral.referredBy}    icon={<UserCircleIcon/>}/>
      <InfoItem label="Referral Phone" value={profile.referral.referralPhone}    icon={<PhoneIcon/>}/>
      <InfoItem label="Referral Address" value={profile.referral.referralAddress}    icon={<MapIcon/>}/>
    </InfoCard>
  );
}

