import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@mui/material';
import { RiFileTextLine } from '../../icons';
import { PageLayout, Sections, Section } from '../PageLayout';
import { LogbookIconButton } from '../../components/LogbookIconButton';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  decorators: [(Story) => (<PageLayout title="Badge"><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Count">
        <Badge badgeContent={3} color="primary">
          <LogbookIconButton variant="outlined" color="secondary" aria-label="Corrections reçues">
            <RiFileTextLine size="1em" />
          </LogbookIconButton>
        </Badge>
      </Section>

      <Section title="Dot">
        <Badge variant="dot" color="primary">
          <LogbookIconButton variant="outlined" color="secondary" aria-label="Nouvelles corrections">
            <RiFileTextLine size="1em" />
          </LogbookIconButton>
        </Badge>
      </Section>

      <Section title="Max">
        <Badge badgeContent={120} max={99} color="primary">
          <LogbookIconButton variant="outlined" color="secondary" aria-label="Corrections reçues">
            <RiFileTextLine size="1em" />
          </LogbookIconButton>
        </Badge>
      </Section>
    </Sections>
  ),
};
