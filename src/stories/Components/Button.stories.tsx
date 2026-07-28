import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Stack, Typography } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const colors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;
const variants = ['contained', 'outlined', 'text'] as const;

const variantColors: Record<(typeof variants)[number], readonly (typeof colors)[number][]> = {
  contained: colors,
  outlined: colors,
  text: colors,
};

const NOTES = [
  'Hauteurs par taille (32/36/48px) figées en dur dans le code (pas un token) : aucun cran de spacing ne tombe pile dessus une fois fontSize+lineHeight(120%) posés — exception documentée, cf. CLAUDE.md.',
  "Contraste AA corrigé sur contained success/error : fond passé à .dark (.main est trop pastel pour porter du blanc à 4.5:1).",
  'Secondary Outlined : contour en secondary.main malgré un contraste de 1.30:1 contre blanc (sous le seuil recommandé de 3:1) — exception assumée par Marjorie, pas une erreur.',
];

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [(Story) => (<PageLayout title="Button" notes={NOTES}><Story /></PageLayout>)],
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

      <Section title="Variants">
        <Stack spacing={3}>
          {variants.map((variant) => (
            <Stack key={variant} spacing={1}>
              <Typography variant="body2" sx={{ textTransform: 'capitalize', fontWeight: 500 }}>
                {variant}
              </Typography>
              <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
                {variantColors[variant].map((color) => (
                  <Button
                    key={color}
                    variant={variant}
                    color={color}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {color}
                  </Button>
                ))}
              </Stack>
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
