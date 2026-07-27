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
      fontWeight: designTokens.fontWeights.bold,
      // Pas de token "chip" dédié : réutilise typography.button.small (13px),
      // seule valeur 13px déjà existante dans les tokens.
      fontSize: designTokens.typography.button.small.fontSize,
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
    // texte contrastText (blanc) déjà correct par défaut : 4.64:1.
    {
      props: { variant: 'filled', color: 'error' },
      style: { backgroundColor: color.orange['800'] },
    },
    // Fond imposé par Marjorie (orange.800, plus le jaune) + texte comme
    // Primary (blanc) : 4.64:1, conforme (contrairement au jaune.600 testé
    // précédemment, qui échouait à 2.03:1 avec du texte blanc).
    {
      props: { variant: 'filled', color: 'warning' },
      style: { backgroundColor: color.orange['800'], color: color.primary.contrastText },
    },
    // Fond imposé par Marjorie (deeppurple.700, hors palette info habituelle)
    // + texte comme Primary (contrastText blanc) : 9.17:1, conforme.
    {
      props: { variant: 'filled', color: 'info' },
      style: { backgroundColor: color.deeppurple['700'], color: color.primary.contrastText },
    },

    // Variant 'subtle' : fond pastel + texte foncé, pour les statuts
    // discrets (ex. "À analyser", "Rendue"...). Couleurs de fond imposées par
    // Marjorie, toutes vérifiées comme existant déjà dans le nuancier :
    // - secondary : cran dédié `subtle.background` (grey.200)
    // - warning   : `subtle.background` = orange.100 (#ffcfbc, l'ancien `main`
    //   de warning, libéré par le passage de son palier Strong à `.dark`)
    // - info      : `main` (#b2dfdb, teal — cf. tokens/semantic.json)
    // - success   : `light` (#b9ead3)
    // - error     : cran dédié `subtle.background`
    // Texte unifié sur `text.secondary` (#404040) pour les 5 : déjà présent
    // dans le nuancier (repris jusqu'ici par warning/info.contrastText) et
    // seule valeur qui atteint l'AA sur les 5 fonds à la fois (7.14:1 sur
    // info, le plus faible des 5 après son passage au teal).
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
      style: { backgroundColor: color.info.main, color: color.text.secondary, border: 'none' },
    },
    {
      props: { variant: 'subtle', color: 'success' },
      style: { backgroundColor: color.success.light, color: color.text.secondary, border: 'none' },
    },
    {
      props: { variant: 'subtle', color: 'error' },
      style: { backgroundColor: color.error.subtle.background, color: color.text.secondary, border: 'none' },
    },
  ],
};
