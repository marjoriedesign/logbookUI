import type { Components, Theme } from '@mui/material/styles';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  defaultProps: {
    color: 'default',
    elevation: 0,
  },
  styleOverrides: {
    // theme.palette plutôt que designTokens directement : palette.ts est la
    // seule source pour background.paper (alias vers paper-elevation-1) et
    // divider (pas encore de token dédié, cf. palette.ts).
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`,
    }),
  },
};
