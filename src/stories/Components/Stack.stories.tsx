import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Stack, Paper, Typography } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

function Block({ children }: { children: ReactNode }) {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Typography variant="body2">{children}</Typography>
    </Paper>
  );
}

const NOTES = [
  'Pas d’override de thème dédié : Stack est 100% MUI natif, son espacement (`spacing={2}`) lit theme.spacing.',
];

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
  decorators: [(Story) => (<PageLayout title="Stack" notes={NOTES}><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Row">
        <Stack direction="row" spacing={2}>
          <Block>1</Block>
          <Block>2</Block>
          <Block>3</Block>
        </Stack>
      </Section>

      <Section title="Column">
        <Stack spacing={2} sx={{ maxWidth: 240 }}>
          <Block>1</Block>
          <Block>2</Block>
          <Block>3</Block>
        </Stack>
      </Section>
    </Sections>
  ),
};
