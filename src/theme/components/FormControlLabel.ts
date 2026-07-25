import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

export const MuiFormControlLabel: Components<Theme>['MuiFormControlLabel'] = {
  styleOverrides: {
    root: {
      // Les marges natives (-11 / 16) compensent le padding par défaut du
      // contrôle (Switch/Radio/Checkbox non custom) pour créer un espacement
      // visuel : notre Switch a un padding réduit à 0, donc cet espacement
      // est repris explicitement ici via gap plutôt que via des marges.
      marginLeft: 0,
      marginRight: 0,
      gap: `${designTokens.spacing.xs}px`,
    },
  },
};
