import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  defaultProps: {
    color: 'default',
    elevation: 0,
  },
  styleOverrides: {
    root: {
      backgroundColor: designTokens.color.background.paper,
      borderBottom: `1px solid ${designTokens.color.divider}`,
    },
  },
};
