import { Chip, Box, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ViewCard, ViewItem } from '@/components/Shared-components/ViewCard';

export function PassportInfo({ profile, onEdit }) {
  return (
    <ViewCard title="PASSPORT DETAILS" onEdit={onEdit}>
      <ViewItem label="Passport Number" value={profile.passport.number} />
      <ViewItem label="Issue Date" value={profile.passport.issueDate} />
      <ViewItem label="Expiry Date" value={profile.passport.expiryDate} />
      <ViewItem 
        label="Visa Status" 
        value={
          <Chip
            label={profile.passport.visaStatus}
            color="success"
            size="small"
          />
        } 
      />
      <ViewItem 
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
    </ViewCard>
  );
}