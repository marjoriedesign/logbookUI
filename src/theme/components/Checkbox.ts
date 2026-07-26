import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

const { color } = designTokens;

// Même logique que Switch/Button/IconButton (cf. Button.ts) : nativement,
// MUI colore la coche cochée/indéterminée avec `color.{X}.main` (voir
// Checkbox.js), trop pastel pour porter 3:1 sur fond blanc pour secondary/
// success/warning/error/info. Substitution par la teinte la plus foncée
// déjà retenue pour ces couleurs ailleurs dans le thème (`.dark`, ou
// `.contrastText` quand `.dark` reste lui-même trop clair).
export const MuiCheckbox: Components<Theme>['MuiCheckbox'] = {
  variants: [
    {
      props: { color: 'secondary' },
      style: { '&.Mui-checked, &.Mui-indeterminate': { color: color.secondary.contrastText } },
    },
    {
      props: { color: 'warning' },
      style: { '&.Mui-checked, &.Mui-indeterminate': { color: color.warning.contrastText } },
    },
    {
      props: { color: 'success' },
      style: { '&.Mui-checked, &.Mui-indeterminate': { color: color.success.dark } },
    },
    {
      props: { color: 'error' },
      style: { '&.Mui-checked, &.Mui-indeterminate': { color: color.error.dark } },
    },
    {
      props: { color: 'info' },
      style: { '&.Mui-checked, &.Mui-indeterminate': { color: color.info.dark } },
    },
  ],
};
