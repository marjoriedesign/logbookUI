import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch, FormControlLabel, Stack } from '@mui/material';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => <FormControlLabel control={<Switch {...args} />} label="Notifier l’élève par email" />,
};

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Primary" />
      <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Secondary" />
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => <FormControlLabel control={<Switch disabled />} label="Désactivé" />,
};
