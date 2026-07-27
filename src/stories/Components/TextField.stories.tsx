import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const TOKENS = [
  { token: 'color.secondary.main', note: 'contour au repos (MuiOutlinedInput — partagé avec Select)' },
  { token: 'color.error.dark', note: 'contour + label + helperText à l’état error' },
  { token: 'designTokens.borderRadius.sm', note: 'rayon (sm, différent du md utilisé par Select)' },
];

const NOTES = [
  'Contour par défaut en secondary.main (beige) malgré un contraste de 1.30:1 contre blanc, sous le seuil AA recommandé de 3:1 — même exception assumée que Secondary Outlined sur Button.',
  'error.main natif MUI (#ff7940, 2.61:1) est sous l’AA : le thème le remplace par error.dark (5.25:1) pour le contour/label/helperText.',
];

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  decorators: [(Story) => (<PageLayout title="TextField" tokens={TOKENS} notes={NOTES}><Story /></PageLayout>)],
  args: {
    label: 'Nom de l’élève',
    placeholder: 'Ex: Camille Dupont',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <TextField {...args} />
      </Section>

      <Section title="HelperText">
        <TextField {...args} helperText="Tel qu’il apparaît dans le registre de classe" />
      </Section>

      <Section title="ErrorState">
        <TextField {...args} error helperText="Ce champ est requis" />
      </Section>

      <Section title="Disabled">
        <TextField {...args} disabled />
      </Section>
    </Sections>
  ),
};
