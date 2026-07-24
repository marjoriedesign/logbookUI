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
      paddingBlock: designTokens.spacing.sm,
    },
    sizeSmall: {
      paddingInline: designTokens.spacing.sm,
      paddingBlock: designTokens.spacing.xs,
    },
  },
};
