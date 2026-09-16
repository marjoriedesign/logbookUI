import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogbookSidePanelHeader } from '../../components/LogbookSidePanelHeader';
import { PageLayout, Sections, Section } from '../PageLayout';

import boy1 from '../../assets/avatars/Boy1.svg';
import boy2 from '../../assets/avatars/Boy2.svg';
import girl2 from '../../assets/avatars/Girl2.svg';

const meta: Meta<typeof LogbookSidePanelHeader> = {
  title: 'Logbook/SidePanelHeader',
  component: LogbookSidePanelHeader,
  decorators: [(Story) => (<PageLayout title="SidePanelHeader"><Story /></PageLayout>)],
  args: {
    students: [{ name: 'Camille Dupont', avatarSrc: boy1, avatarAlt: 'Camille Dupont' }],
  },
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof LogbookSidePanelHeader>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Un seul élève">
        <LogbookSidePanelHeader {...args} onClose={() => {}} />
      </Section>
      <Section title="Devoir de groupe">
        <LogbookSidePanelHeader
          students={[
            { name: 'Emile Ajar', avatarSrc: boy2, avatarAlt: 'Emile Ajar' },
            { name: 'Clara Bernard', avatarSrc: boy1, avatarAlt: 'Clara Bernard' },
            { name: 'Léa Dupont', avatarSrc: girl2, avatarAlt: 'Léa Dupont' },
          ]}
          onClose={() => {}}
        />
      </Section>
    </Sections>
  ),
};
