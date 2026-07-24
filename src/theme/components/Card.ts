import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

export const MuiCard: Components<Theme>['MuiCard'] = {
  defaultProps: {
    elevation: 0,
    variant: 'outlined',
  },
  styleOverrides: {
    root: {
      borderRadius: designTokens.borderRadius.lg,
      borderColor: designTokens.color.divider,
      boxShadow: designTokens.shadow.sm,
    },
  },
};
