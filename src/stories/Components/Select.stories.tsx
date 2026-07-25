import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

function CorrectionTypeSelect({ error, disabled }: { error?: boolean; disabled?: boolean }) {
  return (
    <FormControl sx={{ minWidth: 220 }} error={error} disabled={disabled}>
      <InputLabel id="correction-type-label">Type de correction</InputLabel>
      <Select labelId="correction-type-label" label="Type de correction" defaultValue="oral">
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
};

export default meta;
type Story = StoryObj<typeof CorrectionTypeSelect>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Default">
        <CorrectionTypeSelect />
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
