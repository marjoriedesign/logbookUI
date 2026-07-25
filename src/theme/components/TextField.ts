import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
    size: 'medium',
  },
};

// État error : MUI utilise nativement `error.main` (#ff7940, 2.61:1 contre
// blanc — sous l'AA) pour le contour, le label et le texte d'aide. Aligné
// sur error.dark, comme le Button en variant outlined (cf. Button.ts) :
// 5.25:1.
export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: {
      borderRadius: designTokens.borderRadius.sm,
      // Bordure par défaut demandée en beige (secondary.main) : même teinte
      // et même exception de contraste (1.30:1) déjà acceptée pour le
      // contour de Secondary Outlined sur Button, cf. Button.ts.
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: designTokens.color.secondary.main,
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: designTokens.color.error.dark,
      },
    },
  },
};

export const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
  styleOverrides: {
    root: {
      '&.Mui-error': {
        color: designTokens.color.error.dark,
      },
    },
  },
};

export const MuiFormHelperText: Components<Theme>['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      '&.Mui-error': {
        color: designTokens.color.error.dark,
      },
    },
  },
};
