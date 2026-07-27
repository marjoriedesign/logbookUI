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

const TOKENS = [
  { token: 'theme.palette.background.default', note: 'fond de l’AppBar (blanc — un chrome, pas un contenu à mettre en valeur, donc pas background.paper)' },
  { token: 'color.secondary.main', note: 'bordure du bas de l’AppBar (beige, même teinte que les contours Button/Select)' },
  { token: 'designTokens.spacing.lg/sm', note: 'padding du Toolbar (32px horizontal, 16px vertical, figé au-delà du breakpoint sm)' },
];

const NOTES = [
  'Composant d’assemblage, pas un composant thémé isolé : combine AppBar, Toolbar, Select, Button/LogbookIconButton Outlined Secondary et Badge — déjà documentés individuellement sur leurs pages respectives.',
  'Toolbar : MUI applique nativement un padding horizontal responsive (16px puis 24px dès sm) via son propre mécanisme interne de variants, qu’un simple `sx` ne suffit pas à supplanter au-delà de `sm` sans `!important` — contourné avec un override de thème (theme/components/Toolbar.ts), qui gagne nativement.',
  'Logo et boutons texte (Partager/Feedback/Profil) masqués sous 900px (breakpoint md) au profit d’IconButton seuls, pour laisser la place sur petit écran.',
];

const meta: Meta<typeof NavbarDemo> = {
  title: 'Logbook/Navbar',
  component: NavbarDemo,
  decorators: [(Story) => (<PageLayout title="Navbar" tokens={TOKENS} notes={NOTES}><Story /></PageLayout>)],
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
