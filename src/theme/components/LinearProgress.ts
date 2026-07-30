import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

// Hauteur 8px et bords arrondis (radius 8, borderRadius.md) demandés par
// Marjorie pour tous les usages de LinearProgress — remplace la barre fine
// et carrée par défaut de MUI (4px, sans radius).
export const MuiLinearProgress: Components<Theme>['MuiLinearProgress'] = {
  styleOverrides: {
    root: {
      height: 8,
      borderRadius: designTokens.borderRadius.md,
    },
    bar: {
      borderRadius: designTokens.borderRadius.md,
    },
  },
};
