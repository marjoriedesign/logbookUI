import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch, FormControlLabel } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const TOKENS = [
  { token: 'color.secondary.main', note: 'piste à l’état off, et piste+rond à l’état désactivé' },
  { token: 'color.primary.main', note: 'piste à l’état on (color="primary")' },
  { token: 'color.primary.contrastText', note: 'rond (thumb), toujours blanc' },
];

const NOTES = [
  'Dimensions figées en dur (piste 36×22px, rond 16px) : aucun cran de spacing existant ne correspond — exception documentée dans Switch.ts.',
  'État désactivé : piste transparente + contour secondary.main, rond secondary.main — logique de Secondary Outlined (Button) reprise manuellement, car "secondary" n’existe pas comme couleur native sur Switch.',
  'opacity forcée à 1 sur toute la piste : MUI applique nativement 0.5 à l’état coché, ce qui délave primary.main à l’écran sans ce override.',
];

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  decorators: [(Story) => (<PageLayout title="Switch" tokens={TOKENS} notes={NOTES}><Story /></PageLayout>)],
  args: {
    defaultChecked: true,
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <FormControlLabel control={<Switch {...args} />} label="Activité" />
      </Section>

      <Section title="Disabled">
        <FormControlLabel control={<Switch disabled />} label="Désactivé" />
      </Section>
    </Sections>
  ),
};
