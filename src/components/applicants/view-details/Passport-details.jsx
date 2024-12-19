import { Chip, Box, IconButton, Typography } from '@mui/material';
import { InfoCard, InfoItem } from '@/components/Shared-components/CustomInfoCard';
import { CalendarIcon, HashIcon, PassportBookIcon, FIleIcon } from "@/utils/Icons";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
export function PassportDetailsView({ profile, onEdit }) {
  return (
    <InfoCard title="PASSPORT DETAILS" onEdit={onEdit}>
      <InfoItem label="Passport Number" value={profile.passport.number} icon={<HashIcon />} />
      <InfoItem label="Issue Date" value={profile.passport.issueDate} icon={<CalendarIcon />} />
      <InfoItem label="Expiry Date" value={profile.passport.expiryDate} icon={<CalendarIcon />} />
      <InfoItem
        label="Passport Copy"
        value={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FIleIcon />
            <Typography sx={{ fontSize: 16, fontWeight: 400, color: "#2F2B3D99" }}>{profile.passport.copy}</Typography>
            <IconButton size="small" >
              <RemoveRedEyeOutlinedIcon color='#BDBDBD' sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        }
        icon={<PassportBookIcon />}
      />
      <InfoItem
        label="Visa Status"
        value={
          <Chip
            label={profile.passport.visaStatus}
            size="small"
            sx={{ borderRadius: 1, bgcolor: "#28C76F29", color: "#28C76F", fontSize: 13 }}
          />
        }
        icon={<PassportBookIcon />}
      />

    </InfoCard>
  );
}

