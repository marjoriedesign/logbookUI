import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton, Stack } from '@mui/material';
import { RiMicLine } from '../../icons';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  args: {
    'aria-label': 'Démarrer l’enregistrement',
    children: <RiMicLine size={20} />,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Colors: Story = {
  render: (args) => (
    <Stack direction="row" spacing={1}>
      <IconButton {...args} color="primary" />
      <IconButton {...args} color="secondary" />
      <IconButton {...args} color="default" />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <IconButton {...args} size="small" />
      <IconButton {...args} size="medium" />
      <IconButton {...args} size="large" />
    </Stack>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};
