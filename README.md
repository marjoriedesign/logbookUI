# Logbook Design System

Design system de Logbook (corrections audio d'enseignants analysées par
IA), reconstruit et modernisé en code sur **MUI** + **RemixIcon**,
responsive et accessible AA par défaut.

Le process complet (comment modifier un token, surcharger un composant,
synchroniser avec Figma...) est documenté dans
[`.claude/skills/logbook-design-system/SKILL.md`](.claude/skills/logbook-design-system/SKILL.md).

## Installation

```bash
npm install
npm run tokens:build   # génère src/theme/generated/tokens.ts depuis tokens/*.json
```

## Scripts

| Commande | Effet |
| --- | --- |
| `npm run storybook` | Environnement de test des composants — http://localhost:6006, hot-reload live |
| `npm run dev` | App Vite minimale (aperçu rapide hors Storybook) |
| `npm run tokens:build` | Régénère le thème MUI depuis `tokens/*.json` (à relancer après toute modif de tokens) |
| `npm run build` | Build de production de l'app |
| `npm run build-storybook` | Build statique de Storybook (déployable, ex. pour partager avec l'équipe) |

## Structure

- `tokens/` — source de vérité des design tokens (format Tokens Studio, consommable depuis Figma)
- `src/theme/` — thème MUI généré depuis les tokens + overrides de composants
- `src/components/` — wrappers de composants sans équivalent natif MUI (ex. `LogbookIconButton`, cf. CLAUDE.md sur l'ordre de modification des composants)
- `src/icons/` — icônes RemixIcon utilisées par Logbook
- `src/assets/` — visuels (avatars illustrés, illustrations, logo)
- `src/stories/Foundations/` — couleurs, typographie, spacing, icônes, visuels
- `src/stories/Components/` — composants MUI themés (Button, IconButton, TextField, Chip, Switch, Avatar, Badge, Card...)

## État des tokens

La charte réelle de Logbook (palette teal/corail, police Zain) est
intégrée dans `tokens/core.json` et `tokens/semantic.json`. Deux tokens
sémantiques restent à définir côté Figma — `color.divider` et un style de
texte `button` — voir les commentaires dans `src/theme/palette.ts` et
`src/theme/typography.ts`.
