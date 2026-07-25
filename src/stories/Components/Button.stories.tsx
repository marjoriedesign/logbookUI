import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Stack, Typography } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const colors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;
const variants = ['contained', 'outlined', 'text'] as const;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [(Story) => (<PageLayout title="Button"><Story /></PageLayout>)],
  args: {
    children: 'Valider',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => (
    <Sections>
      <Section title="Default">
        <Button {...args} />
      </Section>

      <Section title="Colors">
        <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <Button key={color} color={color} sx={{ textTransform: 'capitalize' }}>
              {color}
            </Button>
          ))}
        </Stack>
      </Section>

      <Section title="Variants">
        <Stack spacing={2}>
          {variants.map((variant) => (
            <Stack key={variant} direction="row" spacing={2} useFlexGap sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
              <Typography variant="body2" sx={{ width: 90, flexShrink: 0, textTransform: 'capitalize', fontWeight: 500 }}>
                {variant}
              </Typography>
              {colors.map((color) => (
                <Button key={color} variant={variant} color={color} sx={{ textTransform: 'capitalize' }}>
                  {color}
                </Button>
              ))}
            </Stack>
          ))}
        </Stack>
      </Section>

      <Section title="Sizes">
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Button {...args} size="small">
            Small
          </Button>
          <Button {...args} size="medium">
            Medium
          </Button>
          <Button {...args} size="large">
            Large
          </Button>
        </Stack>
      </Section>

      <Section title="Disabled">
        <Button {...args} disabled />
      </Section>
    </Sections>
  ),
};
