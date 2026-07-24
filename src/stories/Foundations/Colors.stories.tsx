import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack, Typography, Paper, useTheme } from '@mui/material';
import { designTokens } from '../../theme/generated/tokens';

const { color } = designTokens;

function Swatch({ label, hex, textColor }: { label: string; hex: string; textColor: string }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: 160,
        p: 2,
        backgroundColor: hex,
        color: textColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: 80,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        {hex}
      </Typography>
    </Paper>
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
        <Swatch label="main" hex={tokens.main} textColor={tokens.contrastText} />
        <Swatch label="light" hex={tokens.light} textColor={color.text.primary} />
        <Swatch label="dark" hex={tokens.dark} textColor={tokens.contrastText} />
      </Stack>
    </Stack>
  );
}

function ColorFoundations() {
  const theme = useTheme();
  const semanticGroups = [
    ['primary', color.primary],
    ['secondary', color.secondary],
    ['success', color.success],
    ['warning', color.warning],
    ['error', color.error],
    ['info', color.info],
  ] as const;

  return (
    <Stack spacing={4} sx={{ p: 2 }}>
      <Box>
        <Typography variant="h3" gutterBottom>
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
        <Typography variant="h3" gutterBottom>
          Fond & texte
        </Typography>
        <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Swatch label="background.default" hex={color.background.default} textColor={color.text.primary} />
          <Swatch
            label="background.paper"
            hex={color.background['paper-elevation-1']}
            textColor={color.text.primary}
          />
          <Swatch label="text.primary" hex={color.text.primary} textColor={color.background['paper-elevation-1']} />
          <Swatch
            label="text.secondary"
            hex={color.text.secondary}
            textColor={color.background['paper-elevation-1']}
          />
          <Swatch label="divider (défaut MUI)" hex={theme.palette.divider} textColor={color.text.primary} />
        </Stack>
      </Box>
    </Stack>
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
