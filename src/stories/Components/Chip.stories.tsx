import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip, Stack } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';
import { designTokens } from '../../theme/generated/tokens';

const TOKENS = [
  { token: 'color.{X}.main/contrastText', note: 'fond/texte du variant filled (Strong)' },
  { token: 'color.secondary.subtle.background, text.secondary', note: 'fond/texte du variant subtle — texte toujours unifié sur text.secondary' },
  { token: 'typography.button.small', note: 'fontSize réutilisé (13px) — pas de token "chip" dédié consommé, bien que typography.chip.label existe dans les tokens' },
  { token: 'designTokens.fontWeights.bold, borderRadius.md', note: 'poids du texte (700), rayon (8px, pas pill)' },
];

const NOTES = [
  'variant="subtle" est une extension custom (officiellement supportée par MUI), pas un variant natif — fond pastel + texte unifié sur text.secondary, pour les statuts discrets.',
  'Strong Info et Erreur sortent du nuancier standard : orange.800/deeppurple.700 posés en dur (sx, pas token) pour tenir le contraste AA (4.64:1 / 9.17:1) — à signaler si Figma doit reproduire ces deux teintes.',
  'typography.chip.label (13px/400/18px) existe dans tokens/semantic.json mais n’est pas consommé par le thème : Chip.ts réutilise typography.button.small à la place — à clarifier si ce doublon est voulu.',
];

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  decorators: [(Story) => (<PageLayout title="Chip" tokens={TOKENS} notes={NOTES}><Story /></PageLayout>)],
  args: {
    label: 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <Chip {...args} />
      </Section>

      <Section title="Strong">
        <Stack direction="row" spacing={1}>
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Succès" color="success" />
          <Chip label="Attention" color="warning" />
        </Stack>
      </Section>

      <Section title="Subtle">
        {/* Rendue/Autre/Analysée/Consultée reprennent les 4 mêmes teintes que
            les avatars illustrés et les Initials (Components/Avatar) :
            orange.100/yellow.200/green.100/teal.100. Rendue (success.light)
            et Consultée (info.main) reprennent ces teintes directement via
            les tokens (cf. tokens/semantic.json), sans sx dédié ; Autre et
            Analysée gardent un sx car warning/error.subtle.background ne
            correspondent pas à yellow.200/orange.100. */}
        <Stack direction="row" spacing={1}>
          <Chip label="Non réalisée" color="secondary" variant="subtle" />
          <Chip label="Rendue" color="success" variant="subtle" />
          <Chip
            label="Autre"
            color="warning"
            variant="subtle"
            sx={{ backgroundColor: designTokens.color.yellow['200'] }}
          />
          <Chip
            label="Analysée"
            color="error"
            variant="subtle"
            sx={{ backgroundColor: designTokens.color.orange['100'] }}
          />
          <Chip label="Consultée" color="info" variant="subtle" />
        </Stack>
      </Section>
    </Sections>
  ),
};
