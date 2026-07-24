import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography, Paper } from '@mui/material';
import * as icons from '../../icons';

function IconFoundations() {
  const entries = Object.entries(icons);
  return (
    <Stack direction="row" spacing={1.5} sx={{ p: 3, flexWrap: 'wrap', gap: 2 }}>
      {entries.map(([name, Icon]) => (
        <Paper
          key={name}
          variant="outlined"
          sx={{
            width: 100,
            p: 1.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Icon size={24} />
          <Typography variant="caption" sx={{ textAlign: 'center', wordBreak: 'break-word', lineHeight: 1.3 }}>
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
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof IconFoundations>;

export const RemixIconSet: Story = {};
