import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { PageLayout } from '../PageLayout';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [(Story) => (<PageLayout title="Breadcrumbs"><Story /></PageLayout>)],
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
