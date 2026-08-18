import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

const { color } = designTokens;
// Pas de token "blanc" dédié : primary/success/error.contrastText valent
// tous #ffffff déjà (cf. tokens/semantic.json) — réutilisé tel quel plutôt
// que d'écrire la valeur en dur, même logique que Chip.ts.
const white = color.success.contrastText;

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
      fontSize: designTokens.typography.button.small.fontSize,
      // MUI fixe nativement la taille des icônes de startIcon/endIcon à 18px
      // en small (voir commonIconStyles dans Button.js), indépendamment de
      // notre fontSize/lineHeight — un bouton avec icône devient alors plus
      // haut qu'un bouton texte seul (l'icône dépasse le line-height). On
      // aligne ici la taille de l'icône sur le lineHeight (120%) du bouton
      // pour que la hauteur reste la même avec ou sans icône.
      '& .MuiButton-startIcon > *:first-of-type, & .MuiButton-endIcon > *:first-of-type': {
        fontSize: '15.6px',
      },
    },
    sizeMedium: {
      fontSize: designTokens.typography.button.medium.fontSize,
      '& .MuiButton-startIcon > *:first-of-type, & .MuiButton-endIcon > *:first-of-type': {
        fontSize: '16.8px',
      },
    },
    sizeLarge: {
      paddingInline: designTokens.spacing.lg,
      // Exception explicite : hauteur imposée à 48px bordure comprise
      // (mesurée sur le bouton outlined équivalent en prod, cf.
      // LogbookNavbar) plutôt que 42px, pour rester fidèle à l'existant.
      // Avec fontSize 15px, lineHeight 120% (18px) et 1px de bordure de
      // chaque côté en outlined, 14px de padding tombe pile sur 48px total
      // (14+14+18+1+1) — à condition que l'icône ne dépasse pas ce
      // lineHeight, cf. override ci-dessous.
      paddingBlock: '14px',
      fontSize: designTokens.typography.button.large.fontSize,
      '& .MuiButton-startIcon > *:first-of-type, & .MuiButton-endIcon > *:first-of-type': {
        fontSize: '18px',
      },
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
    // Demandé par Marjorie : aucun padding en variant text, quelle que soit
    // la taille (les paddingInline/paddingBlock de root/sizeSmall/Medium/Large
    // ci-dessus sont donc annulés ici pour ce variant précis).
    {
      props: { variant: 'text' },
      style: { paddingInline: 0, paddingBlock: 0 },
    },
    // En variant contained, MUI utilise `color.{X}.main` comme fond avec
    // `color.{X}.contrastText` en texte. Pour success/error, `.main` est une
    // teinte trop pastel du groupe pour porter le contrastText existant à
    // 4.5:1 (1.95:1 et 2.61:1). On remonte dans la rampe primitive du même
    // groupe (green/orange, tokens/core.json) jusqu'au premier cran assez
    // saturé : `.dark` (green.800 et orange.900) est justement ce cran.
    {
      // .dark est déjà le fond au repos ici : sans la règle de survol
      // ci-dessous, le hover natif de MUI (qui bascule aussi vers .dark)
      // ne produirait aucun changement visible. `_states.hover` (nuance
      // encore au-dessus de .dark, cf. tokens/semantic.json) plutôt qu'un
      // calcul ad hoc, pour que cette teinte reste réutilisable telle
      // quelle par les autres composants.
      props: { variant: 'contained', color: 'success' },
      style: {
        '--variant-containedBg': color.success.dark,
        '&:hover': { '--variant-containedBg': color.success._states.hover },
      },
    },
    {
      props: { variant: 'contained', color: 'error' },
      style: {
        '--variant-containedBg': color.error.dark,
        '&:hover': { '--variant-containedBg': color.error._states.hover },
      },
    },
    {
      // Bug latent détecté à l'audit des survols : au repos, fond .main +
      // texte contrastText passe l'AA (6.12:1). Mais MUI bascule nativement
      // le fond vers .dark au survol sans toucher au texte — contrastText
      // sur le purple foncé de .dark tombe à 1.21:1. Le texte doit donc
      // aussi passer au blanc au survol (7.94:1).
      props: { variant: 'contained', color: 'info' },
      style: {
        '&:hover': { '--variant-containedColor': white },
      },
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
      // Au survol, le contour et le texte passent à `_states.hover` (une
      // nuance au-dessus de l'accent au repos) — pas de remplissage, contour
      // et texte seulement, contrairement à Secondary Outlined ci-dessus.
      props: { variant: 'outlined', color: 'warning' },
      style: {
        '--variant-outlinedColor': color.warning.contrastText,
        '--variant-outlinedBorder': color.warning.contrastText,
        '&:hover': {
          '--variant-outlinedColor': color.warning._states.hover,
          '--variant-outlinedBorder': color.warning._states.hover,
          '--variant-outlinedBg': 'transparent',
        },
      },
    },
    {
      props: { variant: 'text', color: 'warning' },
      style: {
        '--variant-textColor': color.warning.contrastText,
        '&:hover': {
          '--variant-textColor': color.warning._states.hover,
          '--variant-textBg': 'transparent',
        },
      },
    },
    {
      props: { variant: 'outlined', color: 'success' },
      style: {
        '--variant-outlinedColor': color.success.dark,
        '--variant-outlinedBorder': color.success.dark,
        '&:hover': {
          '--variant-outlinedColor': color.success._states.hover,
          '--variant-outlinedBorder': color.success._states.hover,
          '--variant-outlinedBg': 'transparent',
        },
      },
    },
    {
      props: { variant: 'text', color: 'success' },
      style: {
        '--variant-textColor': color.success.dark,
        '&:hover': {
          '--variant-textColor': color.success._states.hover,
          '--variant-textBg': 'transparent',
        },
      },
    },
    {
      props: { variant: 'outlined', color: 'error' },
      style: {
        '--variant-outlinedColor': color.error.dark,
        '--variant-outlinedBorder': color.error.dark,
        '&:hover': {
          '--variant-outlinedColor': color.error._states.hover,
          '--variant-outlinedBorder': color.error._states.hover,
          '--variant-outlinedBg': 'transparent',
        },
      },
    },
    {
      props: { variant: 'text', color: 'error' },
      style: {
        '--variant-textColor': color.error.dark,
        '&:hover': {
          '--variant-textColor': color.error._states.hover,
          '--variant-textBg': 'transparent',
        },
      },
    },
    {
      props: { variant: 'outlined', color: 'info' },
      style: {
        '--variant-outlinedColor': color.info.dark,
        '--variant-outlinedBorder': color.info.dark,
        '&:hover': {
          '--variant-outlinedColor': color.info._states.hover,
          '--variant-outlinedBorder': color.info._states.hover,
          '--variant-outlinedBg': 'transparent',
        },
      },
    },
    {
      props: { variant: 'text', color: 'info' },
      style: {
        '--variant-textColor': color.info.dark,
        '&:hover': {
          '--variant-textColor': color.info._states.hover,
          '--variant-textBg': 'transparent',
        },
      },
    },
  ],
};
