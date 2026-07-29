import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

// Même pattern que MuiTable : paper-elevation-0 (blanc pur) plutôt que
// theme.palette.background.paper (paper-elevation-1, grey.50) pour que le
// panneau raccorde sans coupure avec LogbookSidePanelHeader, qui utilise
// déjà paper-elevation-0.
export const MuiDrawer: Components<Theme>['MuiDrawer'] = {
  styleOverrides: {
    paper: {
      backgroundColor: designTokens.color.background['paper-elevation-0'],
    },
  },
};
