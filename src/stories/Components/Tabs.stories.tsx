import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab } from '@mui/material';
import { RiMicLine, RiLineChartLine } from '../../icons';
import { PageLayout, Sections, Section } from '../PageLayout';

function CorrectionTabs() {
  const [value, setValue] = useState('corrections');

  return (
    <Tabs value={value} onChange={(_, next) => setValue(next)}>
      <Tab value="corrections" label="Corrections" icon={<RiMicLine size={20} />} />
      <Tab value="analyse" label="Analyse" icon={<RiLineChartLine size={20} />} />
    </Tabs>
  );
}

const NOTES = [
  'Couleur du libellé/icône identique actif et inactif (color.primary.main) : seuls le fond (background.paper à l’état actif, transparent sinon) et l’indicator distinguent l’onglet sélectionné, contrairement à l’atténuation native de MUI sur les onglets inactifs.',
  'Pas de bordure basse sur les Tab eux-mêmes : c’est l’indicator de Tabs (élargi à 4px, sans token dédié à cette épaisseur dans le DS) qui joue ce rôle, uniquement sous l’onglet actif.',
];

const meta: Meta<typeof CorrectionTabs> = {
  title: 'Components/Tabs',
  component: CorrectionTabs,
  decorators: [(Story) => (<PageLayout title="Tabs" notes={NOTES}><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof CorrectionTabs>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Default">
        <CorrectionTabs />
      </Section>
    </Sections>
  ),
};
