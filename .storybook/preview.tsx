import type { Preview } from '@storybook/react-vite'
import React from 'react';
import { LogbookThemeProvider } from '../src/theme/LogbookThemeProvider';
import { Box } from '@mui/material';

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
    },

    options: {
      storySort: {
        order: [
          'Foundations',
          'Components',
          ['Button', 'IconButton', 'Chip', 'Switch', 'TextField', 'Select', 'Badge', 'Avatar'],
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <LogbookThemeProvider>
        <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
          <Story />
        </Box>
      </LogbookThemeProvider>
    ),
  ],
};

export default preview;