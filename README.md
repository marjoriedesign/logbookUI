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
- `src/components/` — wrappers/compositions sans équivalent natif MUI (`LogbookIconButton`, `LogbookNavbar`, `LogbookListenProgress`, cf. CLAUDE.md sur l'ordre de modification des composants)
- `src/icons/` — icônes RemixIcon utilisées par Logbook
- `src/assets/` — visuels (avatars illustrés, illustrations, logo)
- `src/stories/Foundations/` — couleurs, typographie, spacing, icônes, visuels
- `src/stories/Components/` — composants MUI themés pris individuellement (Button, IconButton, TextField, Chip, Switch, Checkbox, Select, Alert, Badge, Avatar, Card...)
- `src/stories/Logbook/` — assemblages propres au produit Logbook, composés à partir des composants ci-dessus (Navbar, ListenProgress...) — catégorie Storybook séparée, distincte de Components

## État des tokens

La charte réelle de Logbook (palette teal/corail, police Zain) est
intégrée dans `tokens/core.json` et `tokens/semantic.json`. Deux tokens
sémantiques restent à définir côté Figma — `color.divider` et un style de
texte `button` — voir les commentaires dans `src/theme/palette.ts` et
`src/theme/typography.ts`.

## semantic.json référence core.json

Les couleurs de `tokens/semantic.json` sont désormais des **références**
vers `tokens/core.json` (`"value": "{color.cyan.900}"`) plutôt que des
copies de valeur figées, partout où c'est possible — y compris en
approchant la primitive la plus proche quand il n'existe pas de
correspondance exacte (Tokens Studio/Figma peut alors afficher le vrai
lien entre une couleur sémantique et sa primitive). Deux couleurs restent
en dehors de ce système : `color.common.white`/`color.common.black`
(`#ffffff`/`#000000`), ajoutées comme primitives dédiées dans
`core.json` — aucune rampe existante n'a de vrai blanc/noir pur (le plus
clair est `grey.50`, un blanc cassé chaud), et plusieurs tokens à fort
impact (`background.default`, `text.primary`, tous les `contrastText`)
doivent rester exactement blancs/noirs.

**Piège Style Dictionary** : le nom de clé `value` est réservé en interne
par l'outil — un groupe de tokens ne doit jamais avoir un enfant nommé
littéralement `value` (ça provoque une boucle infinie au build). C'est
pour ça que `typography.textField` a un champ `text`, pas `value`.

## Couleurs de survol (`_states.hover`)

Chaque couleur sémantique (`tokens/semantic.json`) a un champ `_states.hover`
— une teinte encore au-dessus de `.dark` (ou de `.contrastText` pour
warning, dont `.dark` reste trop pâle), utilisée par `Button.ts` pour les
survols de outlined/text et contained success/error. Ce champ existait déjà
dans la structure (export Tokens Studio) mais ne contenait que des
couleurs MUI par défaut jamais nettoyées (`#2e7d32`, `#ef6c00`...) — il est
maintenant rempli avec de vraies valeurs dérivées de la charte, et
réutilisable tel quel par n'importe quel autre composant qui a besoin de
la même logique de survol (`color.success._states.hover`, etc.).

## Police (Zain)

Le token déclare `fontFamily: "Zain"`, mais le fichier de police lui-même
est chargé séparément via Google Fonts — voir le `<link>` dans
`index.html` (app) et dans `.storybook/preview-head.html` (Storybook, qui
ne lit pas `index.html`). Sans ces deux imports, le navigateur retombe
silencieusement sur Helvetica Neue/Arial au même `font-size` déclaré, avec
un rendu visuellement plus petit (proportions de glyphes différentes). Si
un nouveau poids de police est utilisé, l'ajouter aux deux imports.
