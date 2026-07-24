import type { ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { logbookTheme } from './index';

export function LogbookThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={logbookTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
