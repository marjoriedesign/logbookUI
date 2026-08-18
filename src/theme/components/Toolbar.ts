import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

// Padding demandé : 16px horizontal en mobile, 40px horizontal en web
// (16px vertical inchangé, cf. LogbookNavbar). Seuil mobile/web calé sur
// NAVBAR_DESKTOP_BREAKPOINT (940px, cf. la constante de même nom dans
// LogbookNavbar.tsx — à garder synchronisée avec cette valeur ici, pas de
// bonne façon de partager une constante entre un fichier de thème et un
// composant sans import théorique thème→composant, dans le mauvais sens).
// Ancien seuil `md` (900px) : laissait passer "Partager les accès" sur 2
// lignes faute de place. Ancien seuil `lg` (1200px), essayé ensuite :
// bascule trop tardive, la navbar restait en mode compact alors qu'elle
// avait déjà la place — signalé par Marjorie, d'où ce calage précis sur le
// besoin réel du contenu plutôt qu'un palier générique du thème.
// MUI applique nativement un padding horizontal responsive (16px, puis 24px
// dès `sm`, cf. Toolbar.js) via son propre mécanisme de variants interne : un
// simple `sx` sur le composant ne suffit pas à le supplanter au-delà de
// `sm` sans `!important`. Un override de thème est injecté après les styles
// par défaut du composant, donc il gagne nativement sans avoir besoin de
// `!important` — à condition de reproduire le même point de rupture.
const NAVBAR_DESKTOP_BREAKPOINT = 940;

export const MuiToolbar: Components<Theme>['MuiToolbar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: designTokens.spacing.sm,
      paddingRight: designTokens.spacing.sm,
      paddingTop: designTokens.spacing.sm,
      paddingBottom: designTokens.spacing.sm,
      [theme.breakpoints.up(NAVBAR_DESKTOP_BREAKPOINT)]: {
        paddingLeft: designTokens.spacing.xl,
        paddingRight: designTokens.spacing.xl,
      },
    }),
  },
};
