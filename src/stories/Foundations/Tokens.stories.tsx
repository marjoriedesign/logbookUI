import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack, Typography } from '@mui/material';
import { RiPaletteLine } from '../../icons';
import { PageLayout, Sections, Section } from '../PageLayout';
import { designTokens } from '../../theme/generated/tokens';
import coreJson from '../../../tokens/core.json';
import semanticJson from '../../../tokens/semantic.json';

// Lit les fichiers de tokens bruts (pas designTokens/generated, qui a déjà
// résolu chaque référence en hex et perdu l'alias d'origine) pour retrouver
// la chaîne de référence telle que Tokens Studio/Figma l'affiche
// ("cyan / 900"), pas seulement la couleur finale.

const core = coreJson as unknown as { color: Record<string, Record<string, { value: string }>> };
const semantic = semanticJson as unknown as { color: Record<string, unknown> };

type ColorLeaf = { value: string; type: string };

function isColorLeaf(node: unknown): node is ColorLeaf {
  return (
    typeof node === 'object' &&
    node !== null &&
    (node as Record<string, unknown>).type === 'color' &&
    typeof (node as Record<string, unknown>).value === 'string'
  );
}

const REF_RE = /^\{color\.([\w-]+)\.([\w-]+)\}$/;

function resolve(raw: string): { hex: string; ref: string } {
  const match = REF_RE.exec(raw);
  if (match) {
    const [, family, step] = match;
    const hex = core.color[family]?.[step]?.value ?? raw;
    return { hex, ref: `${family} / ${step}` };
  }
  // Valeur littérale (ex. superposition d'état en alpha) : pas de primitive
  // à référencer, la valeur elle-même sert de repère.
  return { hex: raw, ref: raw };
}

const DISPLAY_NAMES: Record<string, string> = {
  contrasttext: 'contrastText',
  focusvisible: 'focusVisible',
  outlinedborder: 'outlinedBorder',
  disabledbackground: 'disabledBackground',
};

function displayName(key: string) {
  return DISPLAY_NAMES[key] ?? key;
}

// ---------- Core : primitives Material réellement référencées par Theme ----------
// tokens/core.json importe les 19 familles complètes du nuancier Material
// (~270 teintes) : n'affiche ici que les familles/crans que le thème
// référence vraiment, pas le nuancier Material brut au complet.

function usedCorePrimitives() {
  const used = new Map<string, Set<string>>();
  const re = /\{color\.([\w-]+)\.([\w-]+)\}/g;
  const text = JSON.stringify(semantic);
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    const [, family, step] = match;
    if (!used.has(family)) used.set(family, new Set());
    used.get(family)!.add(step);
  }
  return Array.from(used.entries())
    .map(([family, steps]) => [family, Array.from(steps).sort()] as const)
    .sort(([a], [b]) => a.localeCompare(b));
}

function CoreSwatch({ family, step }: { family: string; step: string }) {
  const hex = core.color[family][step].value;
  return (
    <Stack spacing={0.5} sx={{ width: 76 }}>
      <Box sx={{ width: 56, height: 56, borderRadius: 1, border: '1px solid', borderColor: 'divider', backgroundColor: hex }} />
      <Typography variant="caption" sx={{ fontWeight: 600 }}>
        {family}/{step}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {hex}
      </Typography>
    </Stack>
  );
}

function CoreSection() {
  return (
    <Stack spacing={3}>
      {usedCorePrimitives().map(([family, steps]) => (
        <Stack key={family} spacing={1}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {family}
          </Typography>
          <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
            {steps.map((step) => (
              <CoreSwatch key={step} family={family} step={step} />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

// ---------- Theme : palette sémantique, présentation façon Figma ----------

interface Row {
  name: string;
  hex: string;
  ref: string;
}

// Fusionne les champs qui résolvent exactement à la même valeur (ex. les 24
// paper-elevation-N à #ffffff, ou focus/focusVisible partageant la même
// opacité) en une seule ligne, plutôt que de répéter la même couleur.
function buildRows(node: Record<string, unknown>): Row[] {
  const byValue = new Map<string, { hex: string; ref: string; names: string[] }>();
  for (const [key, value] of Object.entries(node)) {
    if (!isColorLeaf(value)) continue;
    const { hex, ref } = resolve(value.value);
    const mapKey = `${hex}__${ref}`;
    const entry = byValue.get(mapKey) ?? { hex, ref, names: [] };
    entry.names.push(displayName(key));
    byValue.set(mapKey, entry);
  }
  return Array.from(byValue.values()).map(({ hex, ref, names }) => ({
    hex,
    ref,
    name: names.length > 3 ? `${names.slice(0, 2).join(', ')} +${names.length - 2} autres` : names.join(', '),
  }));
}

function TokenTable({ rows }: { rows: Row[] }) {
  if (!rows.length) return null;
  return (
    <Stack sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2, overflow: 'hidden', maxWidth: 560 }}>
      <Stack direction="row" sx={{ backgroundColor: 'background.paper', px: 2, py: 1 }}>
        <Typography variant="caption" sx={{ fontWeight: 700, width: 220, flexShrink: 0 }}>
          Name
        </Typography>
        <Typography variant="caption" sx={{ fontWeight: 700 }}>
          Valeur
        </Typography>
      </Stack>
      {rows.map((row) => (
        <Stack
          key={row.name}
          direction="row"
          sx={{ alignItems: 'center', px: 2, py: 1.25, borderTop: '1px solid', borderColor: 'divider' }}
        >
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', width: 220, flexShrink: 0 }}>
            <RiPaletteLine size={16} color={designTokens.color.text.disabled} />
            <Typography variant="body2">{row.name}</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: 'center',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1.5,
              px: 1,
              py: 0.5,
              display: 'inline-flex',
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 0.75,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: row.hex,
                flexShrink: 0,
              }}
            />
            <Typography variant="body2">{row.ref}</Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

function SubgroupHeading({ parent, name }: { parent: string; name: string }) {
  return (
    <Typography variant="body2" sx={{ mt: 2, mb: 0.5 }}>
      <Typography component="span" variant="body2" color="text.disabled">
        {parent} /{' '}
      </Typography>
      <Typography component="span" variant="body2" sx={{ fontWeight: 700 }}>
        {name}
      </Typography>
    </Typography>
  );
}

function ThemeGroup({ name, node }: { name: string; node: Record<string, unknown> }) {
  const leafEntries = Object.fromEntries(Object.entries(node).filter(([, v]) => isColorLeaf(v)));
  const subgroups = Object.entries(node).filter(
    ([, v]) => !isColorLeaf(v) && typeof v === 'object' && v !== null && Object.keys(v as object).length > 0,
  );
  const rows = buildRows(leafEntries);
  if (!rows.length && !subgroups.length) return null;

  return (
    <Stack spacing={1}>
      <Typography variant="body1" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
        {name}
      </Typography>
      <TokenTable rows={rows} />
      {subgroups.map(([subName, subNode]) => (
        <Box key={subName}>
          <SubgroupHeading parent={name} name={subName} />
          <TokenTable rows={buildRows(subNode as Record<string, unknown>)} />
        </Box>
      ))}
    </Stack>
  );
}

function ThemeSection() {
  const rootLeaves = Object.fromEntries(Object.entries(semantic.color).filter(([, v]) => isColorLeaf(v)));
  const groups = Object.entries(semantic.color).filter(
    ([, v]) => !isColorLeaf(v) && typeof v === 'object' && v !== null && Object.keys(v as object).length > 0,
  );

  return (
    <Stack spacing={4}>
      {Object.keys(rootLeaves).length > 0 && (
        <Stack spacing={1}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Racine
          </Typography>
          <TokenTable rows={buildRows(rootLeaves)} />
        </Stack>
      )}
      {groups.map(([name, node]) => (
        <ThemeGroup key={name} name={name} node={node as Record<string, unknown>} />
      ))}
    </Stack>
  );
}

function TokensFoundations() {
  return (
    <PageLayout title="Tokens">
      <Sections>
        <Section title="Core">
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 640 }}>
            Primitives Material (<code>tokens/core.json</code>) réellement référencées par Theme
            ci-dessous — sur les 19 familles complètes du nuancier Material que le fichier importe,
            seules celles utilisées par la charte Logbook sont listées ici.
          </Typography>
          <CoreSection />
        </Section>

        <Section title="Theme">
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 640 }}>
            Palette sémantique consommée par les composants MUI (<code>tokens/semantic.json</code> →{' '}
            <code>src/theme/</code>). Chaque valeur référence une primitive Core ci-dessus, ou une
            superposition calculée (ex. les états de survol/focus).
          </Typography>
          <ThemeSection />
        </Section>
      </Sections>
    </PageLayout>
  );
}

const meta: Meta<typeof TokensFoundations> = {
  title: 'Foundations/Tokens',
  component: TokensFoundations,
  parameters: { layout: 'padded', controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof TokensFoundations>;

export const Reference: Story = {};
