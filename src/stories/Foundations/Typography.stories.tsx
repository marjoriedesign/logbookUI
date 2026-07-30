import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography, Divider } from '@mui/material';
import { designTokens } from '../../theme/generated/tokens';
import { PageLayout } from '../PageLayout';

// Variantes MUI enregistrées dans le thème (theme/typography.ts) : le rendu
// passe par `variant`, donc par le vrai theme.typography (lineHeight forcé
// à 120% y compris). Tout le reste de tokens/semantic.json n'est pas
// exposé comme variante MUI (consommé directement par des composants,
// cf. Button.ts/Chip.ts/Table.ts/TextField.ts...) : rendu ici via `sx`,
// à partir des mêmes valeurs de token, pour rester fidèle à la source.
const MUI_VARIANTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline'] as const;

function isMuiVariant(path: string): path is (typeof MUI_VARIANTS)[number] {
  return (MUI_VARIANTS as readonly string[]).includes(path);
}

type FontStyleToken = {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  textCase: string;
};

function isFontStyleToken(value: unknown): value is FontStyleToken {
  return (
    typeof value === 'object' &&
    value !== null &&
    'fontSize' in value &&
    'fontFamily' in value &&
    'fontWeight' in value
  );
}

// Parcourt designTokens.typography et en extrait tous les styles composites
// (fontSize/fontWeight/lineHeight/letterSpacing/textCase), quel que soit le
// niveau d'imbrication (h1 est à la racine, button/alert/avatar... sont
// imbriqués). `_library` est ignoré : convention `_` = token interne au kit
// Figma, pas un style utilisé par le design system (cf. `_states`).
function collectEntries(node: object, prefix = ''): Array<{ path: string; token: FontStyleToken }> {
  return Object.entries(node).flatMap(([key, value]) => {
    if (key.startsWith('_')) return [];
    const path = prefix ? `${prefix}.${key}` : key;
    if (isFontStyleToken(value)) return [{ path, token: value }];
    if (typeof value === 'object' && value !== null) return collectEntries(value, path);
    return [];
  });
}

const entries = collectEntries(designTokens.typography);

function Row({ path, token }: { path: string; token: FontStyleToken }) {
  return (
    <Stack spacing={0.25} sx={{ py: 1 }}>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'baseline', flexWrap: 'wrap' }}>
        <Typography variant="caption" color="textSecondary" sx={{ fontWeight: 600 }}>
          typography.{path}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {token.fontSize}px · {token.fontWeight}
        </Typography>
      </Stack>
      {isMuiVariant(path) ? (
        <Typography variant={path}>Corrections plus efficaces et plus humaines</Typography>
      ) : (
        <Typography
          component="span"
          sx={{
            fontFamily: token.fontFamily,
            fontWeight: token.fontWeight,
            fontSize: token.fontSize,
            lineHeight: `${token.lineHeight}px`,
            letterSpacing: `${token.letterSpacing}px`,
            textTransform: token.textCase === 'uppercase' ? 'uppercase' : 'none',
          }}
        >
          Corrections plus efficaces et plus humaines
        </Typography>
      )}
    </Stack>
  );
}

function TypographyFoundations() {
  return (
    <PageLayout title="Typographie">
      <Stack sx={{ maxWidth: 900 }} divider={<Divider flexItem />}>
        {entries.map(({ path, token }) => (
          <Row key={path} path={path} token={token} />
        ))}
      </Stack>
    </PageLayout>
  );
}

const meta: Meta<typeof TypographyFoundations> = {
  title: 'Foundations/Typography',
  component: TypographyFoundations,
  parameters: { layout: 'padded', controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof TypographyFoundations>;

export const TypeRamp: Story = {};
