import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton, Stack } from '@mui/material';
import { RiMicLine } from '../../icons';
import { PageLayout, Sections, Section } from '../PageLayout';
import { LogbookIconButton } from '../../components/LogbookIconButton';

const semanticColors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;

const NOTES = [
  'IconButton MUI natif n’a pas de prop `variant` (contrairement à Button/Chip) : impossible à étendre via theme.components.MuiIconButton.variants. Le rendu par couleur vit dans le wrapper src/components/LogbookIconButton.tsx, pas dans le thème.',
  'Aligné sur la bibliothèque Figma de Marjorie (pas de variant séparé) : chaque `color` de LogbookIconButton détermine à elle seule un rendu fixe — primary = contour beige, secondary = fond plein teal + icône blanche. primary/secondary sont donc délibérément inversés par rapport aux tokens de palette du même nom (cf. Button.ts), ce n’est pas une incohérence mais un choix propre à ce composant.',
  'Tailles d’icône (20px small, 24px medium/large) et padding figés en dur dans IconButton.ts : aucun cran de spacing existant ne correspond — exception documentée.',
  '⚠️ LogbookIconButton secondary, survol : color.primary.dark (#4ad09a) est un vert, pas une nuance de teal — incohérence connue du nuancier, reproduite à l’identique (déjà présente sur Button Primary Contained), signalée pour arbitrage plutôt que corrigée en douce.',
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

      <Section title="Colors (natif, sans fond)">
        <Stack direction="row" spacing={1}>
          <IconButton {...args} color="primary" />
          <IconButton {...args} color="secondary" />
          <IconButton {...args} color="default" />
        </Stack>
      </Section>

      <Section title="LogbookIconButton (rendu fixe par couleur)">
        <Stack direction="row" spacing={1}>
          {semanticColors.map((c) => (
            <LogbookIconButton key={c} {...args} color={c} />
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
