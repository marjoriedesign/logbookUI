import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

const { color } = designTokens;

// Onglets "à pans coupés" (façon intercalaires de classeur) plutôt que le
// soulignement pleine largeur natif de MUI : chaque Tab garde son propre
// contour beige (divider) sur les côtés et le haut, coins arrondis en haut
// seulement. Pas de bordure basse sur le Tab lui-même : c'est l'indicator de
// Tabs (repositionné/élargi ci-dessous) qui joue ce rôle, uniquement sous
// l'onglet actif.
export const MuiTabs: Components<Theme>['MuiTabs'] = {
  styleOverrides: {
    root: {
      minHeight: 'auto',
    },
    // Rebaptisé `list` (au lieu de `flexContainer`) dans cette version de
    // MUI, cf. TabsClasses.
    list: {
      gap: designTokens.spacing.xs,
    },
    indicator: {
      backgroundColor: color.primary.main,
      // Pas de token dédié à une épaisseur de trait/indicateur dans le DS
      // (seulement des rayons) : valeur figée assumée, cf. CLAUDE.md
      // "valeurs en dur".
      height: 4,
    },
  },
};

export const MuiTab: Components<Theme>['MuiTab'] = {
  defaultProps: {
    iconPosition: 'start',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 'auto',
      textTransform: 'none',
      fontFamily: designTokens.typography.button.large.fontFamily,
      fontWeight: designTokens.typography.button.large.fontWeight,
      fontSize: designTokens.typography.button.large.fontSize,
      lineHeight: `${designTokens.typography.button.large.lineHeight}px`,
      paddingInline: designTokens.spacing.md,
      paddingBlock: designTokens.spacing.sm,
      gap: designTokens.spacing.xs,
      border: `1px solid ${theme.palette.divider}`,
      borderBottom: 'none',
      borderTopLeftRadius: designTokens.borderRadius.lg,
      borderTopRightRadius: designTokens.borderRadius.lg,
      backgroundColor: 'transparent',
      // Couleur identique actif/inactif (pas d'atténuation à l'état non
      // sélectionné, contrairement au comportement natif de MUI) : seuls le
      // fond et l'indicator distinguent l'onglet actif ici. `&.Mui-selected`
      // répété explicitement pour l'emporter sur la règle native de MUI qui
      // recolore ce même sélecteur (même spécificité, donc l'ordre seul ne
      // suffit pas à garantir la priorité).
      color: color.primary.main,
      '&.Mui-selected': {
        color: color.primary.main,
        backgroundColor: theme.palette.background.paper,
      },
      '& .MuiTab-icon': {
        margin: 0,
      },
      // Onglets plus compacts sous md (mobile exclusivement) : paddingInline
      // réduit à spacing.xs (8px, plus petit que le paddingBlock ci-dessous
      // — inversé par rapport au ratio habituel) et paddingBlock à
      // spacing.sm (16px). Typo en h5 (au lieu de typography.button.large)
      // — demandé pour les onglets d'EvaluationsPage/EvaluationDetail côté
      // logbook-dashboard. La taille d'icône (16×16 au lieu de 20×20
      // demandée) reste gérée côté page consommatrice : la prop `size` de
      // RiXxxLine n'est pas pilotable depuis le thème (pas de slot icône
      // dédié dans l'API MUI Tab pour ça, contrairement à `& .MuiTab-icon`
      // qui ne cible que le wrapper).
      [theme.breakpoints.down('md')]: {
        paddingInline: designTokens.spacing.xs,
        paddingBlock: designTokens.spacing.sm,
        ...theme.typography.h5,
      },
    }),
  },
};
