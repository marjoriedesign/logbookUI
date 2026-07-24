import type { Preview } from '@storybook/react-vite'
import React from 'react';
import { LogbookThemeProvider } from '../src/theme/LogbookThemeProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'error' : toute violation de contraste/aria fait échouer les tests —
      // cohérent avec l'exigence AA du design system Logbook.
      test: 'error'
    }
  },
  decorators: [
    (Story) => (
      <LogbookThemeProvider>
        <Story />
      </LogbookThemeProvider>
    ),
  ],
};

export default preview;