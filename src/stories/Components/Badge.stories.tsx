import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, IconButton } from '@mui/material';
import { RiFileTextLine } from '../../icons';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  decorators: [(Story) => (<PageLayout title="Badge"><Story /></PageLayout>)],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Count">
        <Badge badgeContent={3} color="error">
          <IconButton aria-label="Corrections reçues">
            <RiFileTextLine size={22} />
          </IconButton>
        </Badge>
      </Section>

      <Section title="Dot">
        <Badge variant="dot" color="primary">
          <IconButton aria-label="Nouvelles corrections">
            <RiFileTextLine size={22} />
          </IconButton>
        </Badge>
      </Section>

      <Section title="Max">
        <Badge badgeContent={120} max={99} color="error">
          <IconButton aria-label="Corrections reçues">
            <RiFileTextLine size={22} />
          </IconButton>
        </Badge>
      </Section>
    </Sections>
  ),
};
