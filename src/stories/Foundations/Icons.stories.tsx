import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography, Paper } from '@mui/material';
import { designTokens } from '../../theme/generated/tokens';
import { PageLayout } from '../PageLayout';
import * as icons from '../../icons';

const cellSize = designTokens.spacing['12']; // 96px

function IconFoundations() {
  const entries = Object.entries(icons);
  return (
    <PageLayout title="Icônes">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, ${cellSize}px)`,
          gap: 2,
        }}
      >
        {entries.map(([name, Icon]) => (
          <Paper
            key={name}
            variant="outlined"
            sx={{
              width: cellSize,
              height: cellSize,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              p: 1,
            }}
          >
            <Icon size={24} />
            <Typography variant="caption" sx={{ textAlign: 'center', wordBreak: 'break-word', lineHeight: 1.3 }}>
              {name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </PageLayout>
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
