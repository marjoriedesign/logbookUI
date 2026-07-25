import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

const { color } = designTokens;

// Même logique que Button (cf. Button.ts) : sans variant précisé, MUI colore
// nativement l'icône avec `color.{X}.main` (voir IconButton.js), pensé
// comme fond associé à un contrastText, pas comme couleur de premier plan
// sur fond transparent. Mêmes teintes de substitution déjà retenues pour
// Button.
//
// IconButton n'a nativement aucune prop `variant` (contrairement à
// Button/Chip) : impossible à corriger ici via `variants`. Les traitements
// filled/outlined vivent dans le wrapper src/components/LogbookIconButton.tsx.
export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  styleOverrides: {
    // Taille de l'icône (pas du bouton) imposée par Marjorie : medium et
    // large identiques à 24px, small à 20px. `fontSize` piloté ici ; les
    // icônes doivent utiliser size="1em" pour en hériter (cf. stories).
    // Aucun cran de spacing existant ne vaut 20 ou 24px : exception
    // explicite plutôt qu'un token, cf. CLAUDE.md "valeurs en dur".
    sizeSmall: {
      fontSize: '20px',
    },
    sizeMedium: {
      fontSize: '24px',
    },
    sizeLarge: {
      fontSize: '24px',
    },
  },
  variants: [
    { props: { color: 'secondary' }, style: { color: color.secondary.contrastText } },
    { props: { color: 'warning' }, style: { color: color.warning.contrastText } },
    { props: { color: 'success' }, style: { color: color.success.dark } },
    { props: { color: 'error' }, style: { color: color.error.dark } },
    { props: { color: 'info' }, style: { color: color.info.dark } },
  ],
};
