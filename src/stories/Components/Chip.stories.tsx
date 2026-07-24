import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip, Stack } from '@mui/material';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  args: {
    label: 'IA',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const SemanticColors: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Succès" color="success" />
      <Chip label="Attention" color="warning" />
      <Chip label="Erreur" color="error" />
      <Chip label="Info" color="info" />
    </Stack>
  ),
};
