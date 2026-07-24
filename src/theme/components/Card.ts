import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

export const MuiCard: Components<Theme>['MuiCard'] = {
  defaultProps: {
    elevation: 0,
    variant: 'outlined',
  },
  styleOverrides: {
    // theme.palette.divider : pas encore de token dédié dans
    // tokens/semantic.json, cf. palette.ts.
    root: ({ theme }) => ({
      borderRadius: designTokens.borderRadius.lg,
      borderColor: theme.palette.divider,
      boxShadow: designTokens.shadow.sm,
    }),
  },
};
