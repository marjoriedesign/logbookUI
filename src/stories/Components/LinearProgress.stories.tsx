import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinearProgress, Stack, Typography } from '@mui/material';
import { PageLayout } from '../PageLayout';

const meta: Meta<typeof LinearProgress> = {
  title: 'Components/LinearProgress',
  component: LinearProgress,
  decorators: [(Story) => (<PageLayout title="LinearProgress"><Story /></PageLayout>)],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof LinearProgress>;

export const Determinate: Story = {
  render: () => (
    <Stack spacing={1} sx={{ width: 280 }}>
      <Typography variant="body2" color="text.secondary">
        12 corrections sur 20 terminées
      </Typography>
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <Stack sx={{ width: 280 }}>
      <LinearProgress />
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 280 }}>
      <LinearProgress variant="determinate" value={70} color="primary" />
      <LinearProgress variant="determinate" value={70} color="secondary" />
      <LinearProgress variant="determinate" value={70} color="success" />
    </Stack>
  ),
};
