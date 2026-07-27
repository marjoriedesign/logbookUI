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

// Bloc "Tokens & repères" affiché après la démo de chaque page Components
// (pas Logbook, qui assemble plusieurs composants déjà documentés
// individuellement) : à quels tokens (src/theme/components/*.ts) le
// composant est relié, et les décisions/exceptions importantes à connaître
// avant de reproduire le composant côté Figma ou de le modifier côté code.
// Volontairement discret (petit, atténué, pas de cadre) : c'est un repère
// pour qui cherche, pas le contenu principal de la page. Absent des pages
// Foundations, qui sont déjà elles-mêmes la documentation des tokens.
function TokenNotes({ tokens, notes }: { tokens?: TokenEntry[]; notes?: string[] }) {
  if (!tokens?.length && !notes?.length) return null;
  return (
    <Box sx={{ mt: 6, pt: 2, borderTop: '1px solid', borderColor: 'divider', maxWidth: 760 }}>
      <Stack spacing={1.5}>
        {tokens?.length ? (
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.disabled" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Tokens utilisés
            </Typography>
            {tokens.map((t) => (
              <Stack key={t.token} direction="row" spacing={1} sx={{ alignItems: 'baseline', flexWrap: 'wrap' }}>
                <Typography component="code" variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontWeight: 600 }}>
                  {t.token}
                </Typography>
                {t.value && (
                  <Typography component="code" variant="caption" color="text.disabled" sx={{ fontFamily: 'monospace' }}>
                    {t.value}
                  </Typography>
                )}
                {t.note && (
                  <Typography variant="caption" color="text.disabled">
                    — {t.note}
                  </Typography>
                )}
              </Stack>
            ))}
          </Stack>
        ) : null}
        {notes?.length ? (
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.disabled" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              À savoir
            </Typography>
            <Stack component="ul" spacing={0.25} sx={{ m: 0, pl: 2.5 }}>
              {notes.map((n, i) => (
                <Typography key={i} component="li" variant="caption" color="text.disabled">
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
      <Box sx={{ mt: 5 }}>{children}</Box>
      <TokenNotes tokens={tokens} notes={notes} />
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
