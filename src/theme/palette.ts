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
  // Beige (color.brown.50, même valeur que secondary.main) : bordures des
  // composants "outlined" (Card, séparateurs de Table...) — cf.
  // tokens/semantic.json.
  divider: color.divider,
  action: {
    // Fond au survol (ex. TableRow hover, Select hover) : même beige
    // (color.grey.50, #fdfaf3) que le fond du header de Table, demandé
    // explicitement pour unifier les deux — cf. tokens/semantic.json.
    hover: color.action.hover,
  },
};
