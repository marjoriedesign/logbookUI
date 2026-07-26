import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { LogbookListenProgress } from '../../components/LogbookListenProgress';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof LogbookListenProgress> = {
  title: 'Logbook/ListenProgress',
  component: LogbookListenProgress,
  decorators: [(Story) => (<PageLayout title="ListenProgress"><Story /></PageLayout>)],
  args: {
    value: 52,
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 150, step: 1 },
      description: 'Pourcentage écouté (peut dépasser 100)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LogbookListenProgress>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <LogbookListenProgress {...args} />
      </Section>

      <Section title="Examples">
        <Stack spacing={2}>
          <LogbookListenProgress value={120} />
          <LogbookListenProgress value={52} />
          <LogbookListenProgress value={0} />
        </Stack>
      </Section>
    </Sections>
  ),
};
