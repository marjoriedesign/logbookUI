import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography, Box } from '@mui/material';
import { designTokens } from '../../theme/generated/tokens';

function SpacingFoundations() {
  const entries = Object.entries(designTokens.spacing);
  return (
    <Stack spacing={0.5} sx={{ p: 2 }}>
      {entries.map(([name, px]) => (
        <Stack key={name} direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Typography variant="body2" sx={{ width: 60, flexShrink: 0, fontWeight: 500 }}>
            {name}
          </Typography>
          <Box sx={{ width: px, height: 16, backgroundColor: 'primary.main', borderRadius: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {px}px
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

const meta: Meta<typeof SpacingFoundations> = {
  title: 'Foundations/Spacing',
  component: SpacingFoundations,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof SpacingFoundations>;

export const Scale: Story = {};
