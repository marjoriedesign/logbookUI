import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogbookNavbar } from '../../components/LogbookNavbar';
import { PageLayout, Sections, Section } from '../PageLayout';

const classOptions = [
  { value: '2de2', label: '2DE 2' },
  { value: '2de1', label: '2DE 1' },
  { value: '1eres', label: '1ÈRE S' },
];

function NavbarDemo({ initialSelectedClass = '2de2' }: { initialSelectedClass?: string }) {
  const [selectedClass, setSelectedClass] = useState(initialSelectedClass);
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
      <Section title="Sans classe sélectionnée (ex. page d'accueil)">
        <NavbarDemo initialSelectedClass="" />
      </Section>
    </Sections>
  ),
};
