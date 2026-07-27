import type { TypographyVariantsOptions } from '@mui/material/styles';
import { designTokens } from './generated/tokens';

const { typography, fontFamilies } = designTokens;

// Interlignage imposé à 120% sur toutes les variantes de texte. Corrige au
// passage le bug des tokens (lineHeight stocké en px mais interprété par
// MUI comme un multiplicateur sans unité, ex: 24 -> 24x le fontSize).
const lineHeight = 1.2;

export const typographyOptions: TypographyVariantsOptions = {
  fontFamily: `${fontFamilies.body}, "Helvetica Neue", Arial, sans-serif`,
  h1: { ...typography.h1, lineHeight },
  h2: { ...typography.h2, lineHeight },
  h3: { ...typography.h3, lineHeight },
  h4: { ...typography.h4, lineHeight },
  h5: { ...typography.h5, lineHeight },
  h6: { ...typography.h6, lineHeight },
  subtitle1: { ...typography.subtitle1, lineHeight },
  subtitle2: { ...typography.subtitle2, lineHeight },
  body1: { ...typography.body1, lineHeight },
  body2: { ...typography.body2, lineHeight },
  caption: { ...typography.caption, lineHeight },
  overline: { ...typography.overline, lineHeight },
  // Aucun token "button" dans tokens/semantic.json pour l'instant : seule la
  // police est pilotée par les tokens, le reste vient des défauts MUI en
  // attendant qu'un style de texte dédié soit défini côté Figma.
  button: { fontFamily: fontFamilies.body, textTransform: 'none', lineHeight },
};
