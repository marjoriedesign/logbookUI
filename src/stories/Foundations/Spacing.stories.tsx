import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography, Box } from '@mui/material';
import { designTokens } from '../../theme/generated/tokens';
import { PageLayout } from '../PageLayout';

function SpacingFoundations() {
  const entries = Object.entries(designTokens.spacing);
  return (
    <PageLayout title="Spacing">
      <Stack spacing={0.5}>
        {entries.map(([name, px]) => (
          <Stack key={name} direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <Typography variant="body2" sx={{ width: 60, flexShrink: 0, fontWeight: 500 }}>
              {name}
            </Typography>
            <Box sx={{ width: px, height: 16, backgroundColor: 'primary.main', borderRadius: 0.5 }} />
            <Typography variant="body2" color="textSecondary">
              {px}px
            </Typography>
          </Stack>
        ))}
      </Stack>
    </PageLayout>
  );
}

const meta: Meta<typeof SpacingFoundations> = {
  title: 'Foundations/Spacing',
  component: SpacingFoundations,
  parameters: { layout: 'padded', controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof SpacingFoundations>;

export const Scale: Story = {};
