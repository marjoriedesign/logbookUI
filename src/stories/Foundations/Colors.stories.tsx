import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack, Typography } from '@mui/material';
import { designTokens } from '../../theme/generated/tokens';
import { PageLayout } from '../PageLayout';

const { color, spacing } = designTokens;
const swatchSize = spacing['6']; // 48px

function Swatch({ label, hex }: { label: string; hex: string }) {
  return (
    <Stack spacing={0.5} sx={{ width: swatchSize }}>
      <Box
        sx={{
          width: swatchSize,
          height: swatchSize,
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: hex,
        }}
      />
      <Typography variant="caption" sx={{ fontWeight: 600, wordBreak: 'break-word' }}>
        {label}
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ wordBreak: 'break-word' }}>
        {hex}
      </Typography>
    </Stack>
  );
}

function SemanticGroup({
  name,
  tokens,
}: {
  name: string;
  tokens: { main: string; light: string; dark: string; contrastText: string };
}) {
  return (
    <Stack spacing={1}>
      <Typography variant="body1" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
        {name}
      </Typography>
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
        <Swatch label="main" hex={tokens.main} />
        <Swatch label="light" hex={tokens.light} />
        <Swatch label="dark" hex={tokens.dark} />
      </Stack>
    </Stack>
  );
}

function ColorFoundations() {
  const semanticGroups = [
    ['primary', color.primary],
    ['secondary', color.secondary],
    ['success', color.success],
    ['warning', color.warning],
    ['error', color.error],
    ['info', color.info],
  ] as const;

  return (
    <PageLayout title="Couleurs">
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Couleurs sémantiques
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Charte Logbook (<code>tokens/semantic.json</code>). Chaque
            combinaison main/dark + contrastText doit respecter un contraste AA
            (4.5:1) — vérifier avec l'addon a11y de Storybook après toute
            modification de tokens.
          </Typography>
          <Stack spacing={3}>
            {semanticGroups.map(([name, tokens]) => (
              <SemanticGroup key={name} name={name} tokens={tokens} />
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography variant="h4" gutterBottom>
            Fond & texte
          </Typography>
          <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
            <Swatch label="background.default" hex={color.background.default} />
            <Swatch label="background.paper" hex={color.background['paper-elevation-1']} />
            <Swatch label="text.primary" hex={color.text.primary} />
            <Swatch label="text.secondary" hex={color.text.secondary} />
          </Stack>
        </Box>
      </Stack>
    </PageLayout>
  );
}

const meta: Meta<typeof ColorFoundations> = {
  title: 'Foundations/Colors',
  component: ColorFoundations,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ColorFoundations>;

export const Palette: Story = {};
