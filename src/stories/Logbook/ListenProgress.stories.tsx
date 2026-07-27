import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { LogbookListenProgress } from '../../components/LogbookListenProgress';
import { PageLayout, Sections, Section } from '../PageLayout';

const TOKENS = [
  { token: 'color.primary.main', note: 'barres écoutées + icône casque (dès que value > 0)' },
  { token: 'color.primary.dark', note: 'barres de dépassement, au-delà de 100%' },
  { token: 'color.secondary.main', note: 'barres non écoutées + icône casque à 0%' },
  { token: 'color.text.secondary, fontWeights.semibold', note: 'texte du pourcentage' },
];

const NOTES = [
  'Composant custom Logbook (src/components/LogbookListenProgress.tsx), pas une variante de LinearProgress : silhouette de 12 barres à hauteurs fixes (façon égaliseur), pas une barre continue.',
  'value peut dépasser 100 (relecture d’une partie déjà écoutée) : au-delà, les dernières barres passent en primary.dark plutôt qu’une nouvelle couleur dédiée.',
  'À 0% écouté, toutes les barres sont aplaties à 4px (au lieu de leur hauteur "vague" habituelle), qui n’a de sens que dès qu’il y a une progression à afficher.',
];

const meta: Meta<typeof LogbookListenProgress> = {
  title: 'Logbook/ListenProgress',
  component: LogbookListenProgress,
  decorators: [(Story) => (<PageLayout title="ListenProgress" tokens={TOKENS} notes={NOTES}><Story /></PageLayout>)],
  args: {
    value: 52,
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 150, step: 1 },
      description: 'Pourcentage écouté (peut dépasser 100)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LogbookListenProgress>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <LogbookListenProgress {...args} />
      </Section>

      <Section title="Examples">
        <Stack spacing={2}>
          <LogbookListenProgress value={120} />
          <LogbookListenProgress value={52} />
          <LogbookListenProgress value={0} />
        </Stack>
      </Section>
    </Sections>
  ),
};
