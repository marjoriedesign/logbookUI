import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { PageLayout } from '../PageLayout';

const NOTES = [
  'Pas d’override de thème dédié : Breadcrumbs est 100% MUI natif, ses couleurs (Link "inherit", text.primary) viennent de la palette globale.',
];

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [(Story) => (<PageLayout title="Breadcrumbs" notes={NOTES}><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs aria-label="Fil d’Ariane">
      <Link underline="hover" color="inherit" href="#">
        Classes
      </Link>
      <Link underline="hover" color="inherit" href="#">
        4ᵉ B
      </Link>
      <Typography color="text.primary">Camille Dupont</Typography>
    </Breadcrumbs>
  ),
};
