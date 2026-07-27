import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, FormControlLabel, Stack } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const colors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;

const TOKENS = [
  { token: 'color.secondary/warning.contrastText, success/error/info.dark', note: 'couleur de la coche cochée/indéterminée par color' },
];

const NOTES = [
  'Substitution nécessaire : color.{X}.main (couleur native MUI pour la coche) est trop pastel pour tenir 3:1 sur fond blanc en secondary/success/warning/error/info — remplacé par la teinte la plus foncée déjà retenue ailleurs (.dark, ou .contrastText si .dark reste trop clair).',
  'Limitation connue, pas un bug du thème : Checkbox indeterminate déclenche une alerte axe-core (aria-conditional-attr) — MUI pose lui-même aria-checked="mixed" sur l’input natif, un choix délibéré pour l’accessibilité lecteur d’écran. Documenté dans SKILL.md.',
];

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [(Story) => (<PageLayout title="Checkbox" tokens={TOKENS} notes={NOTES}><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <FormControlLabel control={<Checkbox {...args} />} label="Recevoir les notifications" />
      </Section>

      <Section title="Colors">
        <Stack direction="row" spacing={2}>
          {colors.map((c) => (
            <FormControlLabel key={c} control={<Checkbox defaultChecked color={c} />} label={c} />
          ))}
        </Stack>
      </Section>

      <Section title="States">
        <Stack direction="row" spacing={2}>
          <FormControlLabel control={<Checkbox />} label="Non coché" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Coché" />
          <FormControlLabel control={<Checkbox indeterminate />} label="Indéterminé" />
          <FormControlLabel control={<Checkbox disabled />} label="Désactivé" />
          <FormControlLabel control={<Checkbox disabled defaultChecked />} label="Désactivé (coché)" />
        </Stack>
      </Section>
    </Sections>
  ),
};
