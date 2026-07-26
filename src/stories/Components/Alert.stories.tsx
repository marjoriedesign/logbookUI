import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, Stack } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const severities = ['success', 'warning', 'error', 'info'] as const;
const messages: Record<(typeof severities)[number], string> = {
  success: 'Correction envoyée avec succès.',
  warning: 'Cette correction contient des remarques à vérifier.',
  error: "Échec de l'envoi de la correction.",
  info: 'Une nouvelle correction est disponible.',
};

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  decorators: [(Story) => (<PageLayout title="Alert"><Story /></PageLayout>)],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Standard">
        <Stack spacing={1}>
          {severities.map((severity) => (
            <Alert key={severity} severity={severity}>
              {messages[severity]}
            </Alert>
          ))}
        </Stack>
      </Section>

      <Section title="Outlined">
        <Stack spacing={1}>
          {severities.map((severity) => (
            <Alert key={severity} severity={severity} variant="outlined">
              {messages[severity]}
            </Alert>
          ))}
        </Stack>
      </Section>

      <Section title="Filled">
        <Stack spacing={1}>
          {severities.map((severity) => (
            <Alert key={severity} severity={severity} variant="filled">
              {messages[severity]}
            </Alert>
          ))}
        </Stack>
      </Section>
    </Sections>
  ),
};
