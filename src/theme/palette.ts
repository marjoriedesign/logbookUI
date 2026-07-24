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
  background: color.background,
  text: color.text,
  divider: color.divider,
};
