import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

// Nouveau palier d'emphase : 'subtle' (fond pastel + texte foncé, pour les
// statuts discrets) en plus de 'filled' (fond saturé, pour l'appel à
// l'action) déjà natif à MUI. Extension officiellement supportée par MUI :
// https://mui.com/material-ui/customization/theme-components/#adding-new-component-variants
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    subtle: true;
  }
}

const { color } = designTokens;

export const MuiChip: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: {
      borderRadius: designTokens.borderRadius.md,
      fontFamily: designTokens.typography.chip.label.fontFamily,
      fontWeight: designTokens.typography.chip.label.fontWeight,
      fontSize: designTokens.typography.chip.label.fontSize,
      lineHeight: `${designTokens.typography.chip.label.lineHeight}px`,
    },
  },
  variants: [
    // En variant filled, MUI utilise `color.{X}.main` en fond avec
    // `color.{X}.contrastText` en texte (même mécanisme que Button contained,
    // cf. Button.ts). Pour success/error, `.main` est trop pastel pour porter
    // le contrastText blanc à 4.5:1 (1.95:1 et 2.61:1) : même correction que
    // sur Button, `.dark` (premier cran assez saturé de la rampe primitive).
    // warning passe aussi à `.dark` (5.86:1) pour libérer `.main` : c'est ce
    // fond que le palier 'subtle' de warning réutilise juste en dessous, afin
    // que Strong et Subtle restent visuellement distincts.
    {
      props: { variant: 'filled', color: 'success' },
      style: { backgroundColor: color.success.dark },
    },
    // Fond imposé par Marjorie (orange.800, hors palette error habituelle),
    // désormais un cran dédié color.error.strong.background — texte
    // contrastText (blanc) déjà correct par défaut : 4.64:1.
    {
      props: { variant: 'filled', color: 'error' },
      style: { backgroundColor: color.error.strong.background },
    },
    // Fond imposé par Marjorie (orange.800, plus le jaune ; même valeur que
    // error.strong.background, cran dédié color.warning.strong.background)
    // + texte comme Primary (blanc) : 4.64:1, conforme (contrairement au
    // jaune.600 testé précédemment, qui échouait à 2.03:1 avec du texte blanc).
    {
      props: { variant: 'filled', color: 'warning' },
      style: { backgroundColor: color.warning.strong.background, color: color.primary.contrastText },
    },
    // Fond en teal.700 (= color.info.dark, donc dans la palette info
    // habituelle — remplace l'ancien deeppurple.700, hors palette),
    // via le cran dédié color.info.strong.background — texte comme
    // Primary (contrastText blanc) : 5.32:1, conforme.
    {
      props: { variant: 'filled', color: 'info' },
      style: { backgroundColor: color.info.strong.background, color: color.primary.contrastText },
    },

    // Variant 'subtle' : fond pastel + texte foncé, pour les statuts
    // discrets (ex. "À analyser", "Rendue"...). Chaque couleur a désormais
    // son propre cran dédié `subtle.background` (les 4 mêmes teintes que les
    // avatars illustrés/Initials, cf. Components/Avatar) : secondary:
    // grey.200 ; success: green.100 ; warning: yellow.200 (pas orange.100,
    // qui collisionnait avec error) ; error: orange.100 ; info: teal.100.
    // Texte unifié sur `text.secondary` (#47453f) pour les 5 : déjà présent
    // dans le nuancier (repris jusqu'ici par warning/info.contrastText) et
    // seule valeur qui atteint l'AA sur les 5 fonds à la fois (6.58:1 sur
    // error, le plus faible des 5).
    {
      props: { variant: 'subtle', color: 'secondary' },
      style: {
        backgroundColor: color.secondary.subtle.background,
        color: color.text.secondary,
        border: 'none',
      },
    },
    {
      props: { variant: 'subtle', color: 'warning' },
      style: {
        backgroundColor: color.warning.subtle.background,
        color: color.text.secondary,
        border: 'none',
      },
    },
    {
      props: { variant: 'subtle', color: 'info' },
      style: { backgroundColor: color.info.subtle.background, color: color.text.secondary, border: 'none' },
    },
    {
      props: { variant: 'subtle', color: 'success' },
      style: { backgroundColor: color.success.subtle.background, color: color.text.secondary, border: 'none' },
    },
    {
      props: { variant: 'subtle', color: 'error' },
      style: { backgroundColor: color.error.subtle.background, color: color.text.secondary, border: 'none' },
    },
  ],
};
