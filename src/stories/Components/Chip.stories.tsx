import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip, Stack } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';
import { designTokens } from '../../theme/generated/tokens';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  decorators: [(Story) => (<PageLayout title="Chip"><Story /></PageLayout>)],
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
        </Stack>
      </Section>

      <Section title="Subtle">
        <Stack direction="row" spacing={1}>
          <Chip label="Non réalisée" color="secondary" variant="subtle" />
          <Chip label="Rendue" color="success" variant="subtle" />
          <Chip
            label="Autre"
            color="warning"
            variant="subtle"
            sx={{ backgroundColor: designTokens.color.yellow['200'] }}
          />
          <Chip label="Analysée" color="error" variant="subtle" />
          <Chip label="Consultée" color="info" variant="subtle" />
        </Stack>
      </Section>
    </Sections>
  ),
};
