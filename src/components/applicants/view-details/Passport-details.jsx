import { Chip, Box, IconButton } from '@mui/material';
import { InfoCard, InfoItem } from '@/components/Shared-components/CustomInfoCard';
import { CalendarIcon, HashIcon, PassportBookIcon,FIleIcon } from "@/utils/Icons";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
export function PassportDetailsView({ profile, onEdit }) {
  return (
    <InfoCard title="PASSPORT DETAILS" onEdit={onEdit}>
      <InfoItem label="Passport Number" value={profile.passport.number} icon={<HashIcon/>}/>
      <InfoItem label="Issue Date" value={profile.passport.issueDate} icon={<CalendarIcon/>}/>
      <InfoItem label="Expiry Date" value={profile.passport.expiryDate} icon={<CalendarIcon/>}/>
      <InfoItem 
        label="Visa Status" 
        value={
          <Chip
            label={profile.passport.visaStatus}
            color="success"
            size="small"
          />
        } 
        icon={<PassportBookIcon/>}
      />
      <InfoItem 
        label="Passport Copy" 
        value={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FIleIcon />
            <span>{profile.passport.copy}</span>
            <IconButton size="small">
              <RemoveRedEyeOutlinedIcon />
            </IconButton>
          </Box>
        } 
        icon={<PassportBookIcon/>}
      />
    </InfoCard>
  );
}

