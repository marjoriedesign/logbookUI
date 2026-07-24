import StyleDictionary from 'style-dictionary';

// Transforme tokens/*.json (format Tokens Studio, source de vérité pour Figma)
// en un objet TS résolu, consommé par src/theme/*.ts.
// Ne modifie jamais src/theme/generated/tokens.ts à la main : `npm run tokens:build`.

function isTokenLeaf(node) {
  return node && typeof node === 'object' && 'value' in node && 'type' in node;
}

function formatShadow(value) {
  const { x, y, blur, spread, color } = value;
  return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
}

function resolveNode(node) {
  if (isTokenLeaf(node)) {
    const { value, type } = node;
    switch (type) {
      case 'spacing':
      case 'borderRadius':
      case 'fontWeights':
      case 'fontSizes':
      case 'lineHeights':
        return Number(value);
      case 'boxShadow':
        return formatShadow(value);
      case 'typography':
        return {
          fontFamily: value.fontFamily,
          fontWeight: Number(value.fontWeight),
          fontSize: `${value.fontSize}px`,
          lineHeight: Number(value.lineHeight),
        };
      default:
        return value;
    }
  }

  const out = {};
  for (const [key, child] of Object.entries(node)) {
    out[key] = resolveNode(child);
  }
  return out;
}

const sd = new StyleDictionary({
  source: ['tokens/core.json', 'tokens/semantic.json'],
  log: { verbosity: 'verbose' },
  platforms: {
    ts: {
      buildPath: 'src/theme/generated/',
      files: [{ destination: 'tokens.ts', format: 'logbook/theme-ts' }],
    },
  },
});

sd.registerFormat({
  name: 'logbook/theme-ts',
  format: ({ dictionary }) => {
    const tokens = resolveNode(dictionary.tokens);
    return `// Fichier auto-généré par Style Dictionary — NE PAS ÉDITER À LA MAIN.
// Source : tokens/*.json — voir .claude/skills/logbook-design-system/SKILL.md
// pour le process de mise à jour des tokens.

export const designTokens = ${JSON.stringify(tokens, null, 2)} as const;
`;
  },
});

await sd.buildAllPlatforms();
