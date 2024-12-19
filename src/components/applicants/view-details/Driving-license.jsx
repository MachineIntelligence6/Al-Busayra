import { InfoCard, InfoItem } from "@/components/shared-components/CustomInfoCard";
import { CalendarIcon, HashIcon } from "@/utils/Icons";

export function DrivingLicenseView({ profile, onEdit }) {
  return (
    <InfoCard title="DRIVING LICENSE" onEdit={onEdit}>
      <InfoItem label="License Number" value={profile.drivingLicense.number}  icon={<HashIcon/>}/>
      <InfoItem label="Issue Date" value={profile.drivingLicense.issueDate}  icon={<CalendarIcon/>}/>
      <InfoItem label="Expiry Date" value={profile.drivingLicense.expiryDate} icon={<CalendarIcon/>}/>
    </InfoCard>
  );
}

