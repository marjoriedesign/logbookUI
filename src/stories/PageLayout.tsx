import type { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

// pt/mt = 5 * theme.spacing(1) (8px) = 40px, aligné sur le token spacing.xl.
// L'interlignage à 120% des variantes de texte est piloté par le thème
// (src/theme/typography.ts), pas par ce composant.
export function PageLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Box sx={{ pt: 5, px: 2, pb: 4 }}>
      <Typography variant="h3">{title}</Typography>
      <Box sx={{ mt: 5 }}>{children}</Box>
    </Box>
  );
}
