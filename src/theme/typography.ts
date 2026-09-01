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
  // typography.button.medium (le seul des 3 crans small/medium/large
  // exposable ici : la variante Typography "button" n'a pas de prop taille,
  // contrairement à Button lui-même qui lit sa propre taille directement
  // depuis le token, cf. Button.ts). fontSize (14px) valait déjà par
  // coïncidence le défaut MUI (0.875rem) ; fontWeight ne l'était pas (500
  // medium par défaut chez MUI, pas les 700 bold du token) — corrigé ici.
  button: {
    fontFamily: fontFamilies.body,
    fontSize: typography.button.medium.fontSize,
    fontWeight: typography.button.medium.fontWeight,
    letterSpacing: typography.button.medium.letterSpacing,
    textTransform: 'none',
    lineHeight,
  },
};
