import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Tabs, Tab } from '@mui/material';
import { RiMicLine, RiLineChartLine, RiFileTextLine, RiGroupLine, RiBookletLine } from '../../icons';
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

// Conteneur volontairement étroit pour forcer variant="scrollable" à
// afficher ses boutons de scroll (4 onglets ne tiennent pas sur 280px) —
// démontre que le bouton désactivé (ici, celui de gauche : on est déjà au
// tout début de la liste) reste bien masqué plutôt que de réserver sa
// largeur et décaler les onglets.
function ScrollableTabs() {
  const [value, setValue] = useState('evaluations');

  return (
    <Box sx={{ maxWidth: 280 }}>
      <Tabs value={value} onChange={(_, next) => setValue(next)} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
        <Tab value="evaluations" label="Évaluations" icon={<RiFileTextLine size={20} />} />
        <Tab value="eleves" label="Élèves" icon={<RiGroupLine size={20} />} />
        <Tab value="bulletins" label="Bulletins" icon={<RiBookletLine size={20} />} />
        <Tab value="oral" label="À l'oral" icon={<RiMicLine size={20} />} />
      </Tabs>
    </Box>
  );
}

const NOTES = [
  'Couleur du libellé/icône identique actif et inactif (color.primary.main) : seuls le fond (background.paper à l’état actif, transparent sinon) et l’indicator distinguent l’onglet sélectionné, contrairement à l’atténuation native de MUI sur les onglets inactifs.',
  'Pas de bordure basse sur les Tab eux-mêmes : c’est l’indicator de Tabs (élargi à 4px, sans token dédié à cette épaisseur dans le DS) qui joue ce rôle, uniquement sous l’onglet actif.',
  'Sous md (mobile) : paddingInline réduit à spacing.xs (8px), paddingBlock à spacing.sm (16px) — inversé par rapport au ratio habituel (horizontal ≥ vertical) —, gap entre onglets réduit à spacing[\'3xs\'] (4px, au lieu de spacing.xs/8px), et libellé en typography.h5 (au lieu de typography.button.large) — non visible dans ce viewport Storybook desktop. La taille d’icône (16×16 recommandé sous md, 20×20 au-delà) reste pilotée par la page consommatrice via la prop `size` de chaque RiXxxLine, pas par ce thème.',
  'variant="scrollable" : le bouton de scroll désactivé (ex. côté déjà tout au début/tout à la fin de la liste) est masqué plutôt que de réserver sa largeur, qui décalerait les onglets — comportement natif de MUI corrigé (cf. section "Scrollable" ci-dessous).',
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
      <Section title="Scrollable (conteneur étroit, 4 onglets)">
        <ScrollableTabs />
      </Section>
    </Sections>
  ),
};
