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
  'Sous md (mobile) : paddingInline réduit à spacing.xs (8px), paddingBlock à spacing.sm (16px) — inversé par rapport au ratio habituel (horizontal ≥ vertical) —, gap entre onglets réduit à spacing[\'3xs\'] (4px, au lieu de spacing.xs/8px), et libellé en typography.h5 (au lieu de typography.button.large) — non visible dans ce viewport Storybook desktop. La taille d’icône (16×16 recommandé sous md, 20×20 au-delà) reste pilotée par la page consommatrice via la prop `size` de chaque RiXxxLine, pas par ce thème.',
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
