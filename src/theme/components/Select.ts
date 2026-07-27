import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

const { color } = designTokens;

// Aligné sur Button Secondary Outlined (cf. Button.ts) : même borderRadius
// (md, au lieu du sm partagé avec TextField/MuiOutlinedInput — ciblé ici via
// `.MuiSelect-root` pour ne pas toucher TextField), texte en primary.main
// (color.secondary.contrastText vaut la même valeur #025358).
// Hover en color.action.hover (beige à 50%, cf. palette.ts) plutôt qu'un
// remplissage plein : contrairement à Button Secondary Outlined, un
// Select reste un champ de formulaire, pas une action — un survol trop
// appuyé y est perçu comme un état actif/pressé, ce que Marjorie ne veut
// pas ici.
export const MuiSelect: Components<Theme>['MuiSelect'] = {
  styleOverrides: {
    select: {
      color: color.primary.main,
    },
    root: {
      borderRadius: designTokens.borderRadius.md,
      '&:hover': {
        backgroundColor: color.action.hover,
        // MUI assombrit nativement le contour vers text.primary (noir) au
        // survol : on le garde en secondary.main (couleur du contour au
        // repos, cf. MuiOutlinedInput dans TextField.ts) pour ne pas
        // changer de teinte au survol.
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: color.secondary.main,
        },
      },
      // Non cliquable : pas d'état hover sur un Select désactivé.
      '&.Mui-disabled:hover': {
        backgroundColor: 'transparent',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: color.action.disabled,
        },
      },
    },
  },
};
