import type { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { RiLightbulbLine } from '../icons';
import { designTokens } from '../theme/generated/tokens';

// Encadré "À savoir" affiché après la démo de chaque page Components (pas
// Logbook, qui assemble plusieurs composants déjà documentés
// individuellement) : décisions/exceptions importantes à connaître avant de
// reproduire le composant côté Figma ou de le modifier côté code. Absent
// des pages Foundations, qui sont déjà elles-mêmes la documentation des
// tokens.
function TokenNotes({ notes }: { notes?: string[] }) {
  if (!notes?.length) return null;
  return (
    <Box
      sx={{
        mt: 6,
        p: 2,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: designTokens.color.secondary.subtle.background,
        maxWidth: 760,
      }}
    >
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
        <RiLightbulbLine size={18} color={designTokens.color.text.secondary} />
        <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
          À savoir
        </Typography>
      </Stack>
      <Stack component="ul" spacing={0.5} sx={{ m: 0, pl: 2.5 }}>
        {notes.map((n, i) => (
          <Typography key={i} component="li" variant="body2" color="textSecondary">
            {n}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

// pt/mt = 5 * theme.spacing(1) (8px) = 40px, aligné sur le token spacing.xl.
// L'interlignage à 120% des variantes de texte est piloté par le thème
// (src/theme/typography.ts), pas par ce composant.
export function PageLayout({
  title,
  notes,
  children,
}: {
  title: string;
  notes?: string[];
  children: ReactNode;
}) {
  return (
    <Box sx={{ pt: 5, px: 2, pb: 4 }}>
      <Typography variant="h3">{title}</Typography>
      <Box sx={{ mt: 5 }}>{children}</Box>
      <TokenNotes notes={notes} />
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
