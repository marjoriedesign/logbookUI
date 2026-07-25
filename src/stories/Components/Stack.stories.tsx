import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Stack, Paper, Typography } from '@mui/material';
import { PageLayout } from '../PageLayout';

function Block({ children }: { children: ReactNode }) {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Typography variant="body2">{children}</Typography>
    </Paper>
  );
}

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
  decorators: [(Story) => (<PageLayout title="Stack"><Story /></PageLayout>)],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Row: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Block>1</Block>
      <Block>2</Block>
      <Block>3</Block>
    </Stack>
  ),
};

export const Column: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 240 }}>
      <Block>1</Block>
      <Block>2</Block>
      <Block>3</Block>
    </Stack>
  ),
};
