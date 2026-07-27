import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography } from '@mui/material';
import { PageLayout } from '../PageLayout';

const NOTES = [
  'Pas d’override de thème dédié : Box est un conteneur générique sans styling propre, tout passe par sa prop `sx`, qui lit le thème global (palette, theme.spacing, shape.borderRadius) au cas par cas — rien à reproduire côté Figma en dehors des Foundations.',
];

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  decorators: [(Story) => (<PageLayout title="Box" notes={NOTES}><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
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
