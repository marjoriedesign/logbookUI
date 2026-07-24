import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography, Paper } from '@mui/material';
import * as icons from '../../icons';

function IconFoundations() {
  const entries = Object.entries(icons);
  return (
    <Stack direction="row" spacing={2} sx={{ p: 2, flexWrap: 'wrap' }}>
      {entries.map(([name, Icon]) => (
        <Paper
          key={name}
          variant="outlined"
          sx={{
            width: 120,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Icon size={24} />
          <Typography variant="body2" sx={{ textAlign: 'center', wordBreak: 'break-word' }}>
            {name}
          </Typography>
        </Paper>
      ))}
    </Stack>
  );
}

const meta: Meta<typeof IconFoundations> = {
  title: 'Foundations/Icons',
  component: IconFoundations,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof IconFoundations>;

export const RemixIconSet: Story = {};
