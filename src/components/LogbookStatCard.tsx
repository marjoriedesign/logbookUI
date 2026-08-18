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
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        // Sous sm, 3 cartes à 128px + leurs gaps ne tiennent plus sur une
        // ligne dans un conteneur mobile (padding de page 16px) — 114px
        // reste assez large pour le plus long libellé rencontré à ce jour
        // ("Travaux réalisés", ~106px de contenu), avec un padding réduit
        // en écho (p: 0.5 au lieu de 1). sm+ : valeurs inchangées.
        minWidth: { xs: 114, sm: 128 },
        p: { xs: 0.5, sm: 1 },
        gap: 2,
      }}
    >
      <Box component="img" src={icon} alt={iconAlt} sx={{ width: 48, height: 48 }} />
      <Typography variant="h5" color="textPrimary" sx={{ whiteSpace: 'nowrap' }}>
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
