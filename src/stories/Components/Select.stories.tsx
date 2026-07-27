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

const meta: Meta<typeof CorrectionTypeSelect> = {
  title: 'Components/Select',
  component: CorrectionTypeSelect,
  decorators: [(Story) => (<PageLayout title="Select"><Story /></PageLayout>)],
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
