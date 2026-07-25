import type { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';

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

// Regroupe les variantes d'un même composant sur une seule page (sous-titre
// + démo), au lieu d'une entrée de sidebar par variante.
export function Sections({ children }: { children: ReactNode }) {
  return <Stack spacing={4}>{children}</Stack>;
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Box>{children}</Box>
    </Stack>
  );
}
