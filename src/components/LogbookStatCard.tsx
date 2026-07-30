import { Box, Card, Typography } from '@mui/material';

export interface LogbookStatCardProps {
  /** Illustration Logbook (import SVG depuis src/assets/illustrations). */
  icon: string;
  iconAlt?: string;
  label: string;
  value: string | number;
  /** Ex. "/20" — rendu dans un style plus discret que `value`. */
  suffix?: string;
}

export function LogbookStatCard({ icon, iconAlt = '', label, value, suffix }: LogbookStatCardProps) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: 128, p: 1, gap: 2 }}>
      <Box component="img" src={icon} alt={iconAlt} sx={{ width: 48, height: 48 }} />
      <Typography variant="h5" color="textPrimary">
        {label}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
        {suffix && (
          <Typography variant="subtitle2" color="primary">
            {suffix}
          </Typography>
        )}
      </Box>
    </Card>
  );
}
