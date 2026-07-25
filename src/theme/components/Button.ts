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
};
