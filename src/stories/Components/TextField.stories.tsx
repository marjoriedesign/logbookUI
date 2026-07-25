import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  decorators: [(Story) => (<PageLayout title="TextField"><Story /></PageLayout>)],
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
