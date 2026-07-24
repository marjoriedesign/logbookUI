import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from '@mui/material';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: 'Nom de l’élève',
    placeholder: 'Ex: Camille Dupont',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const HelperText: Story = {
  args: {
    helperText: 'Tel qu’il apparaît dans le registre de classe',
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    helperText: 'Ce champ est requis',
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};
