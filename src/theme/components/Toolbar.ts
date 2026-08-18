import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

// Padding demandé : 16px horizontal en mobile, 40px horizontal en web
// (16px vertical inchangé, cf. LogbookNavbar). Seuil mobile/web aligné sur
// `md` (900px), le même breakpoint que le reste de LogbookNavbar utilise
// déjà pour basculer logo/boutons (seul consommateur actuel de Toolbar).
// MUI applique nativement un padding horizontal responsive (16px, puis 24px
// dès `sm`, cf. Toolbar.js) via son propre mécanisme de variants interne : un
// simple `sx` sur le composant ne suffit pas à le supplanter au-delà de
// `sm` sans `!important`. Un override de thème est injecté après les styles
// par défaut du composant, donc il gagne nativement sans avoir besoin de
// `!important` — à condition de reproduire le même point de rupture.
export const MuiToolbar: Components<Theme>['MuiToolbar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: designTokens.spacing.sm,
      paddingRight: designTokens.spacing.sm,
      paddingTop: designTokens.spacing.sm,
      paddingBottom: designTokens.spacing.sm,
      [theme.breakpoints.up('md')]: {
        paddingLeft: designTokens.spacing.xl,
        paddingRight: designTokens.spacing.xl,
      },
    }),
  },
};
