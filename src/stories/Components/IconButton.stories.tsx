import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton, Stack } from '@mui/material';
import { RiMicLine } from '../../icons';
import { PageLayout, Sections, Section } from '../PageLayout';
import { LogbookIconButton } from '../../components/LogbookIconButton';

const semanticColors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  decorators: [(Story) => (<PageLayout title="IconButton"><Story /></PageLayout>)],
  args: {
    'aria-label': 'Démarrer l’enregistrement',
    children: <RiMicLine size="1em" />,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <IconButton {...args} />
      </Section>

      <Section title="Colors">
        <Stack direction="row" spacing={1}>
          <IconButton {...args} color="primary" />
          <IconButton {...args} color="secondary" />
          <IconButton {...args} color="default" />
        </Stack>
      </Section>

      <Section title="Filled">
        <Stack direction="row" spacing={1}>
          {semanticColors.map((c) => (
            <LogbookIconButton key={c} {...args} variant="filled" color={c} />
          ))}
        </Stack>
      </Section>

      <Section title="Outlined">
        <Stack direction="row" spacing={1}>
          {semanticColors.map((c) => (
            <LogbookIconButton key={c} {...args} variant="outlined" color={c} />
          ))}
        </Stack>
      </Section>

      <Section title="Sizes">
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <IconButton {...args} size="small" />
          <IconButton {...args} size="medium" />
        </Stack>
      </Section>

      <Section title="Disabled">
        <IconButton {...args} disabled />
      </Section>
    </Sections>
  ),
};
