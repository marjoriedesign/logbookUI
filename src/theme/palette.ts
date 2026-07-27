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
    // active/selected/focus/disabled/disabledBackground : mêmes valeurs que
    // les defaults MUI (noir en alpha 54/8/12/26/12%, cf.
    // node_modules/@mui/material/styles/createPalette.js) — explicitées ici
    // pour que ces états existent comme vraies valeurs de tokens (utile pour
    // la synchro Figma) plutôt que de rester un calcul implicite de MUI.
    // Purement déclaratif : aucun changement de rendu, ce sont déjà les
    // valeurs que MUI applique par défaut.
    active: color.action.active,
    selected: color.action.selected,
    focus: color.action.focus,
    disabled: color.action.disabled,
    disabledBackground: color.action.disabledbackground,
  },
};
