import type { Components, Theme } from '@mui/material/styles';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  defaultProps: {
    color: 'default',
    elevation: 0,
  },
  styleOverrides: {
    // theme.palette plutôt que designTokens directement : palette.ts est la
    // seule source pour divider (pas encore de token dédié, cf. palette.ts).
    // background.default (blanc) plutôt que background.paper (teinte crème
    // de paper-elevation-1) : la navbar est un élément de chrome, pas un
    // contenu à mettre en valeur — le blanc reste le fond par défaut, le
    // crème est réservé aux éléments que Marjorie veut faire ressortir.
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.default,
      borderBottom: `1px solid ${theme.palette.divider}`,
    }),
  },
};
