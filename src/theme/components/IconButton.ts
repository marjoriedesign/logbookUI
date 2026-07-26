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
    // Padding ajusté pour que chaque taille d'IconButton (sans bordure)
    // tombe exactement sur la hauteur du Button de même taille (Button.ts) :
    // small 32px, medium 36px, large 46px (48px avec la bordure 1px du
    // variant outlined de LogbookIconButton) — cohérence entre les deux
    // composants, notamment quand ils cohabitent dans la navbar.
    sizeSmall: {
      fontSize: '20px',
      padding: '6px',
    },
    sizeMedium: {
      fontSize: '24px',
      padding: '6px',
    },
    sizeLarge: {
      fontSize: '24px',
      padding: '11px',
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
