import type { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';

export interface TokenEntry {
  /** Chemin du token, ex. "color.primary.main". */
  token: string;
  /** Valeur résolue (hex/px), affichée à titre indicatif — le token reste la source de vérité. */
  value?: string;
  /** Où/pourquoi ce token est utilisé. */
  note?: string;
}

// Bloc "Tokens & repères" affiché sous le titre de chaque page Components/
// Logbook : à quels tokens (src/theme/components/*.ts) le composant est
// relié, et les décisions/exceptions importantes à connaître avant de
// reproduire le composant côté Figma ou de le modifier côté code. Absent
// des pages Foundations, qui sont déjà elles-mêmes la documentation des
// tokens.
function TokenNotes({ tokens, notes }: { tokens?: TokenEntry[]; notes?: string[] }) {
  if (!tokens?.length && !notes?.length) return null;
  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        maxWidth: 760,
      }}
    >
      <Stack spacing={2}>
        {tokens?.length ? (
          <Stack spacing={0.75}>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Tokens utilisés
            </Typography>
            {tokens.map((t) => (
              <Stack key={t.token} direction="row" spacing={1} sx={{ alignItems: 'baseline', flexWrap: 'wrap' }}>
                <Typography component="code" variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 600 }}>
                  {t.token}
                </Typography>
                {t.value && (
                  <Typography component="code" variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                    {t.value}
                  </Typography>
                )}
                {t.note && (
                  <Typography variant="body2" color="text.secondary">
                    — {t.note}
                  </Typography>
                )}
              </Stack>
            ))}
          </Stack>
        ) : null}
        {notes?.length ? (
          <Stack spacing={0.75}>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              À savoir
            </Typography>
            <Stack component="ul" spacing={0.5} sx={{ m: 0, pl: 2.5 }}>
              {notes.map((n, i) => (
                <Typography key={i} component="li" variant="body2" color="text.secondary">
                  {n}
                </Typography>
              ))}
            </Stack>
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
}

// pt/mt = 5 * theme.spacing(1) (8px) = 40px, aligné sur le token spacing.xl.
// L'interlignage à 120% des variantes de texte est piloté par le thème
// (src/theme/typography.ts), pas par ce composant.
export function PageLayout({
  title,
  tokens,
  notes,
  children,
}: {
  title: string;
  tokens?: TokenEntry[];
  notes?: string[];
  children: ReactNode;
}) {
  return (
    <Box sx={{ pt: 5, px: 2, pb: 4 }}>
      <Typography variant="h3">{title}</Typography>
      <TokenNotes tokens={tokens} notes={notes} />
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
