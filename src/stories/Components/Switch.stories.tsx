import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch, FormControlLabel } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  decorators: [(Story) => (<PageLayout title="Switch"><Story /></PageLayout>)],
  args: {
    defaultChecked: true,
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <FormControlLabel control={<Switch {...args} />} label="Activité" />
      </Section>

      <Section title="Disabled">
        <FormControlLabel control={<Switch disabled />} label="Désactivé" />
      </Section>
    </Sections>
  ),
};
