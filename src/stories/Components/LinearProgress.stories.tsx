import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinearProgress, Stack, Typography } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof LinearProgress> = {
  title: 'Components/LinearProgress',
  component: LinearProgress,
  decorators: [(Story) => (<PageLayout title="LinearProgress"><Story /></PageLayout>)],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof LinearProgress>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Determinate">
        <Stack spacing={1} sx={{ width: 280 }}>
          <Typography variant="body2" color="text.secondary">
            12 corrections sur 20 terminées
          </Typography>
          <LinearProgress variant="determinate" value={60} />
        </Stack>
      </Section>

      <Section title="Indeterminate">
        <Stack sx={{ width: 280 }}>
          <LinearProgress />
        </Stack>
      </Section>

      <Section title="Colors">
        <Stack spacing={2} sx={{ width: 280 }}>
          <LinearProgress variant="determinate" value={70} color="primary" />
          <LinearProgress variant="determinate" value={70} color="secondary" />
          <LinearProgress variant="determinate" value={70} color="success" />
        </Stack>
      </Section>
    </Sections>
  ),
};
