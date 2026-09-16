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
      // borderRadius.md (8px), pas .sm (4px) : la maquette Figma du Side
      // Panel de correction (node 252:8955) montre systématiquement 8px sur
      // tous les inputs ("Input" y référence littéralement --borderradius,8px)
      // — écart repéré par Marjorie sur ce chantier, corrigé ici plutôt que
      // localement, ce token pilotant tous les TextField de l'app.
      borderRadius: designTokens.borderRadius.md,
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
    // Texte saisi ("input/value" dans le nuancier Figma) : typography.textField.text,
    // jusqu'ici défini mais jamais branché — l'input retombait sur le body1
    // du thème (20px) au lieu de ses 16px/24 dédiés.
    input: {
      fontFamily: designTokens.typography.textField.text.fontFamily,
      fontWeight: designTokens.typography.textField.text.fontWeight,
      fontSize: designTokens.typography.textField.text.fontSize,
      lineHeight: `${designTokens.typography.textField.text.lineHeight}px`,
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
