import {
  ViewCard,
  ViewItem,
} from "@/components/Shared-components/ViewCard";

export function ContactDetail({ profile, onEdit }) {
  return (
    <ViewCard title="CONTACT & RESIDENCE" onEdit={onEdit}>
      <ViewItem label="Email Address" value={profile.contactInfo.email} />
      <ViewItem label="Phone Number" value={profile.contactInfo.phone} />
      <ViewItem label="WhatsApp Number" value={profile.contactInfo.whatsapp} />
      <ViewItem label="Nationality" value={profile.contactInfo.nationality} />
    </ViewCard>
  );
}
