import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@mui/material';
import { LogbookStatCard } from '../../components/LogbookStatCard';
import { PageLayout, Sections, Section } from '../PageLayout';

import certification from '../../assets/illustrations/Certification.svg';
import growth from '../../assets/illustrations/Growth.svg';

const meta: Meta<typeof LogbookStatCard> = {
  title: 'Logbook/StatCard',
  component: LogbookStatCard,
  decorators: [(Story) => (<PageLayout title="StatCard"><Story /></PageLayout>)],
  args: {
    icon: certification,
    iconAlt: 'Certification',
    label: 'Moyenne',
    value: 0,
    suffix: '/20',
  },
};

export default meta;
type Story = StoryObj<typeof LogbookStatCard>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <LogbookStatCard {...args} />
      </Section>

      <Section title="Examples">
        <Stack direction="row" spacing={2}>
          <LogbookStatCard icon={certification} iconAlt="Certification" label="Moyenne" value={16} suffix="/20" />
          <LogbookStatCard icon={growth} iconAlt="Croissance" label="Progression" value="+12" suffix="%" />
        </Stack>
      </Section>
    </Sections>
  ),
};
