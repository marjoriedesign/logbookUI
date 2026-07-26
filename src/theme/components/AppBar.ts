import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  defaultProps: {
    color: 'default',
    elevation: 0,
  },
  styleOverrides: {
    // background.default (blanc) plutôt que background.paper (teinte crème
    // de paper-elevation-1) : la navbar est un élément de chrome, pas un
    // contenu à mettre en valeur — le blanc reste le fond par défaut, le
    // crème est réservé aux éléments que Marjorie veut faire ressortir.
    // Ligne du bas en secondary.main (beige) plutôt que le divider gris par
    // défaut, pour rester dans la même palette que le reste de la navbar
    // (contours des boutons/Select déjà en secondary.main).
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.default,
      borderBottom: `1px solid ${designTokens.color.secondary.main}`,
    }),
  },
};
