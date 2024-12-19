import { InfoCard, InfoItem } from "@/components/shared-components/CustomInfoCard";
import { CheckIcon, MailIcon, PhoneIcon, WhatsappIcon } from "@/utils/Icons";

export function ContactInfoView({ profile, onEdit }) {
  return (
    <InfoCard title="CONTACT & RESIDENCE" onEdit={onEdit}>
      <InfoItem label="Email Address" value={profile.contactInfo.email} icon={<MailIcon/>}/>
      <InfoItem label="Phone Number" value={profile.contactInfo.phone} icon={<PhoneIcon/>}/>
      <InfoItem label="WhatsApp Number" value={profile.contactInfo.whatsapp} icon={<WhatsappIcon/>}/>
      <InfoItem label="Nationality" value={profile.contactInfo.nationality} icon={<CheckIcon/>}/>
    </InfoCard>
  );
}

