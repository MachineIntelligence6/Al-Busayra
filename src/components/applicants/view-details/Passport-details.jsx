import { Chip, Box, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { InfoCard, InfoItem } from '@/components/Shared-components/CustomInfoCard';

export function PassportDetailsView({ profile, onEdit }) {
  return (
    <InfoCard title="PASSPORT DETAILS" onEdit={onEdit}>
      <InfoItem label="Passport Number" value={profile.passport.number} />
      <InfoItem label="Issue Date" value={profile.passport.issueDate} />
      <InfoItem label="Expiry Date" value={profile.passport.expiryDate} />
      <InfoItem 
        label="Visa Status" 
        value={
          <Chip
            label={profile.passport.visaStatus}
            color="success"
            size="small"
          />
        } 
      />
      <InfoItem 
        label="Passport Copy" 
        value={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span>{profile.passport.copy}</span>
            <IconButton size="small">
              <VisibilityIcon />
            </IconButton>
          </Box>
        } 
      />
    </InfoCard>
  );
}

