import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

const { color } = designTokens;

// Aligné sur Button Secondary Outlined (cf. Button.ts) : même borderRadius
// (md, au lieu du sm partagé avec TextField/MuiOutlinedInput — ciblé ici via
// `.MuiSelect-root` pour ne pas toucher TextField), texte en primary.main
// (color.secondary.contrastText vaut la même valeur #025358) et même hover
// (fond plein en secondary.main, le contour déjà en secondary.main au repos
// s'y fond).
export const MuiSelect: Components<Theme>['MuiSelect'] = {
  styleOverrides: {
    select: {
      color: color.primary.main,
    },
    root: {
      borderRadius: designTokens.borderRadius.md,
      '&:hover': {
        backgroundColor: color.secondary.main,
        // MUI assombrit nativement le contour vers text.primary (noir) au
        // survol : on le garde en secondary.main pour qu'il se fonde dans
        // le fond, comme sur Button Secondary Outlined.
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: color.secondary.main,
        },
      },
    },
  },
};
