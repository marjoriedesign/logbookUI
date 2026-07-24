import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typographyOptions } from './typography';
import { components } from './components';
import { designTokens } from './generated/tokens';

export const logbookTheme = createTheme({
  palette,
  typography: typographyOptions,
  shape: {
    borderRadius: designTokens.borderRadius.md,
  },
  components,
});
