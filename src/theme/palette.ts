import type { PaletteOptions } from '@mui/material/styles';
import { designTokens } from './generated/tokens';

const { color } = designTokens;

export const palette: PaletteOptions = {
  mode: 'light',
  primary: color.primary,
  secondary: color.secondary,
  success: color.success,
  warning: color.warning,
  error: color.error,
  info: color.info,
  background: {
    default: color.background.default,
    paper: color.background['paper-elevation-1'],
  },
  text: color.text,
  // color.divider n'existe pas encore côté tokens/semantic.json (groupe vide,
  // stub non rempli) : à faire arbitrer par Marjorie avant de le brancher ici.
  // En attendant, MUI applique sa valeur par défaut.
};
