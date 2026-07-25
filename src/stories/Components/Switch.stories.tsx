import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch, FormControlLabel, Stack } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  decorators: [(Story) => (<PageLayout title="Switch"><Story /></PageLayout>)],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <FormControlLabel control={<Switch {...args} />} label="Notifier l’élève par email" />
      </Section>

      <Section title="Colors">
        <Stack direction="row" spacing={2}>
          <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Primary" />
          <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Secondary" />
        </Stack>
      </Section>

      <Section title="Disabled">
        <FormControlLabel control={<Switch disabled />} label="Désactivé" />
      </Section>
    </Sections>
  ),
};
