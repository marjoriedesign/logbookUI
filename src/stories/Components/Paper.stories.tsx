import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paper, Stack, Typography } from '@mui/material';

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Elevations: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap' }}>
      {[0, 1, 3, 6, 12].map((elevation) => (
        <Paper key={elevation} elevation={elevation} sx={{ p: 2, width: 140 }}>
          <Typography variant="body2">elevation={elevation}</Typography>
        </Paper>
      ))}
    </Stack>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Paper variant="outlined" sx={{ p: 2, width: 200 }}>
      <Typography variant="body2">variant="outlined"</Typography>
    </Paper>
  ),
};
