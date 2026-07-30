import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';
import { LogbookCommentField } from '../../components/LogbookCommentField';
import { RiThumbUpLine } from '../../icons';
import { designTokens } from '../../theme/generated/tokens';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof LogbookCommentField> = {
  title: 'Logbook/CommentField',
  component: LogbookCommentField,
  decorators: [(Story) => (<PageLayout title="CommentField"><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof LogbookCommentField>;

function CommentFieldDemo() {
  const [value, setValue] = useState('Tu maîtrises bien les autres notions');

  return (
    <Box sx={{ width: { xs: '100%', sm: 480 } }}>
      <LogbookCommentField
        icon={<RiThumbUpLine size={24} color={designTokens.color.purple[500]} />}
        label="Points positifs"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
}

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Rempli (side panel, 480px de large)">
        <CommentFieldDemo />
      </Section>
      <Section title="Vide (placeholder)">
        <Box sx={{ width: { xs: '100%', sm: 480 } }}>
          <LogbookCommentField
            icon={<RiThumbUpLine size={24} color={designTokens.color.purple[500]} />}
            label="Points positifs"
            placeholder="Écrire un commentaire..."
          />
        </Box>
      </Section>
    </Sections>
  ),
};
