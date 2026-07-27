import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

// Pas d'intitulé par défaut : le composant reste un simple Select, l'ajout
// d'un label (InputLabel) est au choix de qui l'utilise. Sans label visible,
// on garde un nom accessible via aria-label pour rester conforme AA.
function CorrectionTypeSelect({
  error,
  disabled,
  label,
}: {
  error?: boolean;
  disabled?: boolean;
  label?: string;
}) {
  return (
    <FormControl sx={{ minWidth: 220 }} error={error} disabled={disabled}>
      {label && <InputLabel id="correction-type-label">{label}</InputLabel>}
      <Select
        labelId={label ? 'correction-type-label' : undefined}
        label={label}
        aria-label={label ? undefined : 'Type de correction'}
        defaultValue="oral"
      >
        <MenuItem value="oral">Correction orale</MenuItem>
        <MenuItem value="ecrite">Correction écrite</MenuItem>
        <MenuItem value="mixte">Mixte</MenuItem>
      </Select>
    </FormControl>
  );
}

const TOKENS = [
  { token: 'color.primary.main', note: 'couleur du texte sélectionné' },
  { token: 'color.secondary.main', note: 'contour au repos et au survol (MuiOutlinedInput — partagé avec TextField)' },
  { token: 'color.action.hover', note: 'fond au survol — beige quasi blanc (grey.50, #fdfaf3), même teinte que le header de Table' },
  { token: 'color.action.disabled', note: 'contour au survol d’un Select désactivé' },
  { token: 'designTokens.borderRadius.md', note: 'rayon du root Select (md, différent du sm partagé TextField)' },
];

const NOTES = [
  'Fond au survol volontairement léger (beige quasi blanc) plutôt qu’un remplissage plein comme Button Secondary Outlined : un Select reste un champ de formulaire, pas une action — un survol trop appuyé serait perçu comme un état pressé.',
  'Contour au survol figé explicitement sur secondary.main (même teinte qu’au repos) : sans ce override, MUI assombrit nativement le contour vers le noir au survol.',
  'Pas d’intitulé par défaut dans la démo : sans InputLabel visible, un aria-label est posé pour rester conforme AA.',
];

const meta: Meta<typeof CorrectionTypeSelect> = {
  title: 'Components/Select',
  component: CorrectionTypeSelect,
  decorators: [(Story) => (<PageLayout title="Select" tokens={TOKENS} notes={NOTES}><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof CorrectionTypeSelect>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Default">
        <CorrectionTypeSelect />
      </Section>

      <Section title="WithLabel">
        <CorrectionTypeSelect label="Type de correction" />
      </Section>

      <Section title="Disabled">
        <CorrectionTypeSelect disabled />
      </Section>

      <Section title="ErrorState">
        <CorrectionTypeSelect error />
      </Section>
    </Sections>
  ),
};
