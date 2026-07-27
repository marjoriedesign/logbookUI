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
          <Typography id="linear-progress-label" variant="body2" color="text.secondary">
            12 corrections sur 20 terminées
          </Typography>
          <LinearProgress variant="determinate" value={60} aria-labelledby="linear-progress-label" />
        </Stack>
      </Section>

      <Section title="Indeterminate">
        <Stack sx={{ width: 280 }}>
          <LinearProgress aria-label="Chargement en cours" />
        </Stack>
      </Section>

      <Section title="Colors">
        <Stack spacing={2} sx={{ width: 280 }}>
          <LinearProgress variant="determinate" value={70} color="primary" aria-label="Progression (primary)" />
          <LinearProgress variant="determinate" value={70} color="secondary" aria-label="Progression (secondary)" />
          <LinearProgress variant="determinate" value={70} color="success" aria-label="Progression (success)" />
        </Stack>
      </Section>
    </Sections>
  ),
};
