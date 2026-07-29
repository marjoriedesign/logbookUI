import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogbookSidePanelHeader } from '../../components/LogbookSidePanelHeader';
import { PageLayout, Sections, Section } from '../PageLayout';

import boy1 from '../../assets/avatars/Boy1.svg';

const meta: Meta<typeof LogbookSidePanelHeader> = {
  title: 'Logbook/SidePanelHeader',
  component: LogbookSidePanelHeader,
  decorators: [(Story) => (<PageLayout title="SidePanelHeader"><Story /></PageLayout>)],
  args: {
    studentName: 'Camille Dupont',
    avatarSrc: boy1,
    avatarAlt: 'Camille Dupont',
  },
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof LogbookSidePanelHeader>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <LogbookSidePanelHeader {...args} onClose={() => {}} />
      </Section>
    </Sections>
  ),
};
