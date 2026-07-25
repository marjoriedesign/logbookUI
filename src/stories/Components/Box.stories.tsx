import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="body2">
        Box est le conteneur de base — toute mise en forme passe par la prop{' '}
        <code>sx</code>, qui lit le thème (couleurs, spacing, radius).
      </Typography>
    </Box>
  ),
};
