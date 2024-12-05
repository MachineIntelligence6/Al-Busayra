import { Chip, Box, IconButton, Divider } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ViewCard, ViewItem } from '@/components/Shared-components/ViewCard';

export function PassportInfo({ profile, onEdit }) {
  return (
    <ViewCard title="Passport Details" onEdit={onEdit}>
      <ViewItem label="Passport No." value={profile.passport.number} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />

      <ViewItem label="Passport Issue Date" value={profile.passport.issueDate} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1}} />

      <ViewItem label="Passport Expiry Date" value={profile.passport.expiryDate} />
      <Divider sx={{ borderStyle: "dotted", marginTop: 1 }} />
     
      <ViewItem 
        label="Passport Copy" 
        value={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span>{profile.passport.copy}</span>
            
          </Box>
        } 
      />
    </ViewCard>
  );
}