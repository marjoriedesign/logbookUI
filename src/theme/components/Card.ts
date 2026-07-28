import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

export const MuiCard: Components<Theme>['MuiCard'] = {
  defaultProps: {
    elevation: 0,
    variant: 'outlined',
  },
  styleOverrides: {
    // theme.palette.divider : cf. tokens/semantic.json (color.divider) et
    // palette.ts. Pas d'ombre portée (demandé par Marjorie) : 'none' plutôt
    // que de compter sur elevation=0 (plus robuste si un appelant passe une
    // autre elevation).
    root: ({ theme }) => ({
      borderRadius: designTokens.borderRadius.lg,
      borderColor: theme.palette.divider,
      boxShadow: 'none',
    }),
  },
};
