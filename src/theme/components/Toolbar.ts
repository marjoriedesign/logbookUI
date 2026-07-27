import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

// Padding demandé : 32px horizontal, 16px vertical (cf. LogbookNavbar).
// MUI applique nativement un padding horizontal responsive (16px, puis 24px
// dès `sm`, cf. Toolbar.js) via son propre mécanisme de variants interne : un
// simple `sx` sur le composant ne suffit pas à le supplanter au-delà de
// `sm` sans `!important`. Un override de thème est injecté après les styles
// par défaut du composant, donc il gagne nativement sans avoir besoin de
// `!important` — à condition de reproduire le même point de rupture.
export const MuiToolbar: Components<Theme>['MuiToolbar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: designTokens.spacing.lg,
      paddingRight: designTokens.spacing.lg,
      paddingTop: designTokens.spacing.sm,
      paddingBottom: designTokens.spacing.sm,
      [theme.breakpoints.up('sm')]: {
        paddingLeft: designTokens.spacing.lg,
        paddingRight: designTokens.spacing.lg,
      },
    }),
  },
};
