import { InfoCard, InfoItem } from "@/components/Shared-components/CustomInfoCard";

export function ContactInfoView({ profile, onEdit }) {
  return (
    <InfoCard title="CONTACT & RESIDENCE" onEdit={onEdit}>
      <InfoItem label="Email Address" value={profile.contactInfo.email} />
      <InfoItem label="Phone Number" value={profile.contactInfo.phone} />
      <InfoItem label="WhatsApp Number" value={profile.contactInfo.whatsapp} />
      <InfoItem label="Nationality" value={profile.contactInfo.nationality} />
    </InfoCard>
  );
}

