import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography, Divider } from '@mui/material';
import { FoundationsLayout } from './FoundationsLayout';

const variants = ['h1', 'h2', 'h3', 'body1', 'body2', 'button'] as const;

function TypographyFoundations() {
  return (
    <FoundationsLayout title="Typographie">
      <Stack spacing={0.5} sx={{ maxWidth: 900 }} divider={<Divider flexItem />}>
        {variants.map((variant) => (
          <Stack key={variant} direction="row" spacing={2} sx={{ alignItems: 'baseline' }}>
            <Typography variant="body2" color="text.secondary" sx={{ width: 100, flexShrink: 0, fontWeight: 500 }}>
              {variant}
            </Typography>
            <Typography variant={variant}>Corrections plus efficaces et plus humaines</Typography>
          </Stack>
        ))}
      </Stack>
    </FoundationsLayout>
  );
}

const meta: Meta<typeof TypographyFoundations> = {
  title: 'Foundations/Typography',
  component: TypographyFoundations,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof TypographyFoundations>;

export const TypeRamp: Story = {};
