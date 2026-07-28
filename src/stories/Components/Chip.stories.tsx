import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip, Stack } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const NOTES = [
  'variant="subtle" est une extension custom (officiellement supportée par MUI), pas un variant natif — fond pastel + texte unifié sur text.secondary, pour les statuts discrets.',
  'Strong error/warning partagent la même teinte (orange.800), hors nuancier error/warning habituel — écart assumé par Marjorie pour tenir le contraste AA (4.64:1). Strong info (teal.700) reste dans la palette info habituelle (= info.dark), 5.32:1.',
];

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  decorators: [(Story) => (<PageLayout title="Chip" notes={NOTES}><Story /></PageLayout>)],
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
          <Chip label="Erreur" color="error" />
          <Chip label="Info" color="info" />
        </Stack>
      </Section>

      <Section title="Subtle">
        {/* Rendue/Autre/Analysée/Consultée reprennent les 4 mêmes teintes que
            les avatars illustrés et les Initials (Components/Avatar) :
            orange.100/yellow.200/green.100/teal.100 — toutes via
            color.{X}.subtle.background (cf. tokens/semantic.json), sans sx
            dédié : Non réalisée=grey.200, Rendue=green.100 (success),
            Autre=yellow.200 (warning), Analysée=orange.100 (error),
            Consultée=teal.100 (info). */}
        <Stack direction="row" spacing={1}>
          <Chip label="Non réalisée" color="secondary" variant="subtle" />
          <Chip label="Rendue" color="success" variant="subtle" />
          <Chip label="Autre" color="warning" variant="subtle" />
          <Chip label="Analysée" color="error" variant="subtle" />
          <Chip label="Consultée" color="info" variant="subtle" />
        </Stack>
      </Section>
    </Sections>
  ),
};
