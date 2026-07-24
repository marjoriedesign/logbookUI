import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

export const MuiChip: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: {
      borderRadius: designTokens.borderRadius.pill,
      fontWeight: designTokens.fontWeights.medium,
    },
  },
};
