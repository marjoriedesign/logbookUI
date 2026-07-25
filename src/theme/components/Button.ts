import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    variant: 'contained',
  },
  styleOverrides: {
    root: {
      borderRadius: designTokens.borderRadius.md,
      paddingInline: designTokens.spacing.md,
      // Exception explicite (hauteur imposée par Marjorie : 36px en medium) :
      // avec la font-size et le line-height (120%) du token typography.button,
      // aucun cran de spacing ne tombe pile sur cette hauteur — valeur figée
      // au lieu d'un token, cf. CLAUDE.md "valeurs en dur".
      paddingBlock: '9.6015625px',
      fontWeight: designTokens.fontWeights.bold,
    },
    sizeSmall: {
      paddingInline: designTokens.spacing.sm,
      // Exception explicite : hauteur imposée à 32px, idem ci-dessus.
      paddingBlock: '8.203125px',
      fontSize: designTokens.typography.button.small,
    },
    sizeMedium: {
      fontSize: designTokens.typography.button.medium,
    },
    sizeLarge: {
      paddingInline: designTokens.spacing.lg,
      // Exception explicite : hauteur imposée à 42px, idem ci-dessus.
      paddingBlock: '12px',
      fontSize: designTokens.typography.button.large,
    },
  },
  // En variant outlined/text, MUI utilise nativement `color.{X}.main` comme
  // couleur de texte/bordure (voir @mui/material/Button/Button.js). Pour
  // secondary/warning/success/error/info, ce `.main` est une teinte pastel
  // pensée comme fond (associée à son `contrastText`), pas comme couleur de
  // texte sur blanc : contraste AA insuffisant. On bascule vers la nuance la
  // plus foncée déjà définie dans le même groupe de couleur (`.dark`, ou
  // `.contrastText` quand `.dark` reste lui-même trop clair) — toujours une
  // teinte existante de la même famille, jamais une couleur inventée.
  variants: [
    // En variant contained, MUI utilise `color.{X}.main` comme fond avec
    // `color.{X}.contrastText` en texte. Pour success/error, `.main` est une
    // teinte trop pastel du groupe pour porter le contrastText existant à
    // 4.5:1 (1.95:1 et 2.61:1). On remonte dans la rampe primitive du même
    // groupe (green/orange, tokens/core.json) jusqu'au premier cran assez
    // saturé : `.dark` (green.800 et orange.900) est justement ce cran.
    {
      props: { variant: 'contained', color: 'success' },
      style: { '--variant-containedBg': designTokens.color.success.dark },
    },
    {
      props: { variant: 'contained', color: 'error' },
      style: { '--variant-containedBg': designTokens.color.error.dark },
    },
    {
      // MUI applique nativement un contour en alpha(main, 0.5) — demandé ici
      // en pleine opacité, identique au texte (déjà primary.main nativement).
      props: { variant: 'outlined', color: 'primary' },
      style: { '--variant-outlinedBorder': designTokens.color.primary.main },
    },
    {
      // Contour explicitement demandé en secondary.main (#efe0c6, le fond de
      // Secondary Contained), malgré un contraste de 1.30:1 contre blanc
      // (sous le seuil de 3:1 recommandé pour un contour de bouton) : choix
      // assumé par Marjorie. Le texte reste en contrastText pour la lisibilité.
      // Au survol, le fond devient plein en secondary.main (au lieu du léger
      // lavis natif de MUI) : le texte contrastText reste lisible dessus,
      // c'est la même combinaison que Secondary Contained.
      props: { variant: 'outlined', color: 'secondary' },
      style: {
        '--variant-outlinedColor': designTokens.color.secondary.contrastText,
        '--variant-outlinedBorder': designTokens.color.secondary.main,
        '&:hover': {
          '--variant-outlinedBg': designTokens.color.secondary.main,
        },
      },
    },
    {
      props: { variant: 'text', color: 'secondary' },
      style: { '--variant-textColor': designTokens.color.secondary.contrastText },
    },
    {
      props: { variant: 'outlined', color: 'warning' },
      style: {
        '--variant-outlinedColor': designTokens.color.warning.contrastText,
        '--variant-outlinedBorder': designTokens.color.warning.contrastText,
      },
    },
    {
      props: { variant: 'text', color: 'warning' },
      style: { '--variant-textColor': designTokens.color.warning.contrastText },
    },
    {
      props: { variant: 'outlined', color: 'success' },
      style: {
        '--variant-outlinedColor': designTokens.color.success.dark,
        '--variant-outlinedBorder': designTokens.color.success.dark,
      },
    },
    {
      props: { variant: 'text', color: 'success' },
      style: { '--variant-textColor': designTokens.color.success.dark },
    },
    {
      props: { variant: 'outlined', color: 'error' },
      style: {
        '--variant-outlinedColor': designTokens.color.error.dark,
        '--variant-outlinedBorder': designTokens.color.error.dark,
      },
    },
    {
      props: { variant: 'text', color: 'error' },
      style: { '--variant-textColor': designTokens.color.error.dark },
    },
    {
      props: { variant: 'outlined', color: 'info' },
      style: {
        '--variant-outlinedColor': designTokens.color.info.dark,
        '--variant-outlinedBorder': designTokens.color.info.dark,
      },
    },
    {
      props: { variant: 'text', color: 'info' },
      style: { '--variant-textColor': designTokens.color.info.dark },
    },
  ],
};
