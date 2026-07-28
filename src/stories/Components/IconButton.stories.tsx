import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton, Stack } from '@mui/material';
import { RiMicLine } from '../../icons';
import { PageLayout, Sections, Section } from '../PageLayout';
import { LogbookIconButton } from '../../components/LogbookIconButton';

const semanticColors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;

const NOTES = [
  'IconButton MUI natif n’a pas de prop `variant` (contrairement à Button/Chip) : impossible à étendre via theme.components.MuiIconButton.variants. Les variants filled/outlined vivent dans le wrapper src/components/LogbookIconButton.tsx, pas dans le thème.',
  'Tailles d’icône (20px small, 24px medium/large) et padding figés en dur dans IconButton.ts : aucun cran de spacing existant ne correspond — exception documentée.',
  '⚠️ Filled primary, survol : color.primary.dark (#4ad09a) est un vert, pas une nuance de teal — incohérence connue du nuancier, reproduite à l’identique (déjà présente sur Button Primary Contained), signalée pour arbitrage plutôt que corrigée en douce.',
];

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  decorators: [(Story) => (<PageLayout title="IconButton" notes={NOTES}><Story /></PageLayout>)],
  args: {
    'aria-label': 'Démarrer l’enregistrement',
    children: <RiMicLine size="1em" />,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <IconButton {...args} />
      </Section>

      <Section title="Colors">
        <Stack direction="row" spacing={1}>
          <IconButton {...args} color="primary" />
          <IconButton {...args} color="secondary" />
          <IconButton {...args} color="default" />
        </Stack>
      </Section>

      <Section title="Filled">
        <Stack direction="row" spacing={1}>
          {semanticColors.map((c) => (
            <LogbookIconButton key={c} {...args} variant="filled" color={c} />
          ))}
        </Stack>
      </Section>

      <Section title="Outlined">
        <Stack direction="row" spacing={1}>
          {semanticColors.map((c) => (
            <LogbookIconButton key={c} {...args} variant="outlined" color={c} />
          ))}
        </Stack>
      </Section>

      <Section title="Sizes">
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <IconButton {...args} size="small" />
          <IconButton {...args} size="medium" />
        </Stack>
      </Section>

      <Section title="Disabled">
        <IconButton {...args} disabled />
      </Section>
    </Sections>
  ),
};
