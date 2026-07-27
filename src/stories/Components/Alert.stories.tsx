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

const TOKENS = [
  { token: 'color.{severity}.light', note: 'fond du variant standard' },
  { token: 'color.{severity}.dark (success/error/info), warning.contrastText', note: 'icône + contour du variant outlined' },
  { token: 'color.success/error.dark, warning/info.main', note: 'fond du variant filled — corrigé à l’AA pour success/error (voir notes)' },
  { token: 'color.{severity}.contrastText', note: 'texte du variant filled' },
  { token: 'color.text.secondary', note: 'texte des variants standard/outlined' },
  { token: 'designTokens.borderRadius.md', note: 'rayon' },
];

const NOTES = [
  'Fond filled corrigé à l’AA : success/error passent à .dark (.main est trop pastel pour porter du texte blanc à 4.5:1) ; warning/info restent en .main, déjà lisibles avec leur contrastText (7.14–7.36:1).',
  'Icône du variant filled non redéfinie : elle hérite de currentColor (= contrastText), comportement natif MUI, pas un oubli.',
];

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  decorators: [(Story) => (<PageLayout title="Alert" tokens={TOKENS} notes={NOTES}><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
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
