import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography, Divider } from '@mui/material';

const variants = ['h1', 'h2', 'h3', 'body1', 'body2', 'button'] as const;

function TypographyFoundations() {
  return (
    <Stack spacing={2} sx={{ p: 2 }} divider={<Divider flexItem />}>
      {variants.map((variant) => (
        <Stack key={variant} direction="row" spacing={2} sx={{ alignItems: 'baseline' }}>
          <Typography variant="body2" color="text.secondary" sx={{ width: 80, flexShrink: 0 }}>
            {variant}
          </Typography>
          <Typography variant={variant}>Corrections plus efficaces et plus humaines</Typography>
        </Stack>
      ))}
    </Stack>
  );
}

const meta: Meta<typeof TypographyFoundations> = {
  title: 'Foundations/Typography',
  component: TypographyFoundations,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof TypographyFoundations>;

export const TypeRamp: Story = {};
