import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@mui/material';
import { RiFileTextLine } from '../../icons';
import { PageLayout, Sections, Section } from '../PageLayout';
import { LogbookIconButton } from '../../components/LogbookIconButton';

const NOTES = [
  'Pas d’override de thème dédié (MuiBadge absent de src/theme/components/index.ts) : Badge est 100% MUI natif, ses couleurs viennent directement de la palette globale (primary.main/contrastText, etc. — mêmes tokens que partout ailleurs, rien de spécifique à documenter côté Figma pour ce composant en particulier).',
];

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  decorators: [(Story) => (<PageLayout title="Badge" notes={NOTES}><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Count">
        <Badge badgeContent={3} color="primary">
          <LogbookIconButton color="primary" aria-label="Corrections reçues">
            <RiFileTextLine size="1em" />
          </LogbookIconButton>
        </Badge>
      </Section>

      <Section title="Dot">
        <Badge variant="dot" color="primary">
          <LogbookIconButton color="primary" aria-label="Nouvelles corrections">
            <RiFileTextLine size="1em" />
          </LogbookIconButton>
        </Badge>
      </Section>

      <Section title="Max">
        <Badge badgeContent={120} max={99} color="primary">
          <LogbookIconButton color="primary" aria-label="Corrections reçues">
            <RiFileTextLine size="1em" />
          </LogbookIconButton>
        </Badge>
      </Section>
    </Sections>
  ),
};
