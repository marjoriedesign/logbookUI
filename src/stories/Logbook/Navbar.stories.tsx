import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogbookNavbar } from '../../components/LogbookNavbar';
import { PageLayout, Sections, Section } from '../PageLayout';

const classOptions = [
  { value: '2de2', label: '2DE 2' },
  { value: '2de1', label: '2DE 1' },
  { value: '1eres', label: '1ÈRE S' },
];

function NavbarDemo() {
  const [selectedClass, setSelectedClass] = useState('2de2');
  return (
    <LogbookNavbar
      classOptions={classOptions}
      selectedClass={selectedClass}
      onClassChange={setSelectedClass}
      userName="Axelle"
      notificationCount={1}
    />
  );
}

const meta: Meta<typeof NavbarDemo> = {
  title: 'Logbook/Navbar',
  component: NavbarDemo,
  decorators: [(Story) => (<PageLayout title="Navbar"><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof NavbarDemo>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Default">
        <NavbarDemo />
      </Section>
    </Sections>
  ),
};
