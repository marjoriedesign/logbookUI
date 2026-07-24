import type { TypographyVariantsOptions } from '@mui/material/styles';
import { designTokens } from './generated/tokens';

const { typography, fontFamilies } = designTokens;

export const typographyOptions: TypographyVariantsOptions = {
  fontFamily: `${fontFamilies.body}, "Helvetica Neue", Arial, sans-serif`,
  h1: typography.h1,
  h2: typography.h2,
  h3: typography.h3,
  body1: typography.body1,
  body2: typography.body2,
  // Aucun token "button" dans tokens/semantic.json pour l'instant : seule la
  // police est pilotée par les tokens, le reste vient des défauts MUI en
  // attendant qu'un style de texte dédié soit défini côté Figma.
  button: { fontFamily: fontFamilies.body, textTransform: 'none' },
};
