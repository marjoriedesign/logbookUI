---
name: logbook-design-system
description: Process de maintenance du design system Logbook (tokens, thème MUI, RemixIcon, Storybook, sync Figma). À utiliser pour toute modification de tokens, de composant thémé, ou de la passerelle Figma dans ce projet.
metadata:
  type: project
---

# Design system Logbook

Logbook propose des corrections audio d'enseignants analysées par IA :
l'enseignant enregistre son retour oral, l'élève reçoit l'audio + une
synthèse écrite, et l'historique alimente un suivi de progrès. Ce repo
recrée et modernise le design system historiquement maintenu dans Figma,
en code, sur **MUI** + **RemixIcon**, avec un environnement de test
Storybook et une passerelle vers Figma via **Tokens Studio**.

Toute proposition de design doit rester **responsive** (breakpoints MUI)
et **accessible AA** (contraste 4.5:1 texte normal / 3:1 grand texte et
composants UI) — c'est une exigence transverse du projet, pas une option.

## Architecture

```
tokens/                  # source de vérité — format Tokens Studio
  core.json              # primitives : couleurs brutes, échelle typo/spacing/radius/ombres
  semantic.json           # alias sémantiques (primary, text.primary, typography.h1...)
  $themes.json            # déclaration du thème pour le plugin Tokens Studio
  $metadata.json          # ordre des token sets

style-dictionary.config.mjs   # transforme tokens/*.json -> src/theme/generated/tokens.ts

src/theme/
  generated/tokens.ts     # AUTO-GÉNÉRÉ, ne pas éditer à la main
  palette.ts              # PaletteOptions MUI construit depuis les tokens
  typography.ts           # TypographyVariantsOptions MUI
  components/             # overrides MUI (un fichier par composant)
  index.ts                # createTheme()
  LogbookThemeProvider.tsx # <ThemeProvider> + <CssBaseline>

src/icons/index.ts        # ré-export ciblé des icônes RemixIcon utilisées

src/stories/
  Foundations/            # Colors, Typography, Spacing, Icons — vue d'ensemble des tokens
  Components/             # Button, TextField, Chip, Card... (vrais composants MUI themés)

.storybook/
  main.ts                 # config Storybook (addons a11y, docs, vitest inclus par défaut)
  preview.tsx              # decorator LogbookThemeProvider + parameter a11y.test = 'error'
```

## Ajouter ou modifier un token

1. Éditer `tokens/core.json` (primitive brute : une couleur, une taille...)
   ou `tokens/semantic.json` (alias qui référence une primitive, ex.
   `"{color.indigo.600}"`).
2. Lancer `npm run tokens:build` — régénère `src/theme/generated/tokens.ts`.
3. Le thème (`src/theme/palette.ts`, `typography.ts`, `components/*.ts`)
   lit `designTokens` depuis ce fichier généré : aucune valeur ne doit
   être codée en dur ailleurs dans `src/theme/`.
4. Vérifier dans Storybook (`npm run storybook`) que rien ne casse et que
   l'addon a11y ne signale pas de nouvelle violation de contraste.

Ne jamais éditer `src/theme/generated/tokens.ts` à la main — il est
écrasé au prochain `npm run tokens:build`.

## Surcharger un composant MUI

1. Créer (ou éditer) un fichier dans `src/theme/components/`, ex.
   `Button.ts`, avec `defaultProps` et `styleOverrides` typés via
   `Components<Theme>['MuiButton']`.
2. L'enregistrer dans `src/theme/components/index.ts`.
3. Utiliser les valeurs de `designTokens` (radius, spacing, couleurs) au
   lieu de valeurs codées en dur, pour que tout reste piloté par les
   tokens.
4. Ajouter/mettre à jour la story correspondante dans
   `src/stories/Components/`.

## Icônes (RemixIcon)

Toutes les icônes utilisées passent par `src/icons/index.ts`, qui
ré-exporte explicitement depuis `@remixicon/react` (catalogue complet :
https://remixicon.com). Ajouter une icône = l'ajouter à cet export, pas
l'importer directement depuis `@remixicon/react` ailleurs — ça garde une
liste explicite des icônes réellement utilisées par Logbook, visible
dans la story `Foundations/Icons`.

## Checklist accessibilité AA

- Contraste texte normal ≥ 4.5:1, grand texte (≥18px ou ≥14px gras) et
  composants UI (bordures, icônes actives) ≥ 3:1.
- Ne jamais transmettre une information uniquement par la couleur
  (ex. statut de correction) — toujours coupler à un texte ou une icône.
- Tout élément interactif doit avoir un état focus visible (MUI le fait
  par défaut ; vérifier après tout override de `styleOverrides`).
- Chaque `IconButton` ou icône seule cliquable a un `aria-label`.
- L'addon a11y de Storybook est configuré en `test: 'error'`
  (`.storybook/preview.tsx`) : une story qui casse l'accessibilité doit
  faire échouer les tests, pas juste afficher un warning ignoré.

## Checklist responsive

- Utiliser les breakpoints MUI (`xs/sm/md/lg/xl`) via `sx` ou
  `useMediaQuery`, jamais de media query CSS écrite à la main.
- Vérifier chaque composant via le sélecteur de viewport de Storybook
  (icône appareil dans la toolbar) sur mobile/tablette/desktop avant de
  considérer une story terminée.

## Lancer l'environnement de test

```
npm run storybook        # http://localhost:6006, hot-reload sur toute modif de thème/composant/story
npm run dev              # app Vite minimale (aperçu rapide hors Storybook)
npm run tokens:build      # régénère le thème depuis tokens/*.json
```

## Synchroniser avec Figma (Tokens Studio)

Le dossier `tokens/` est déjà au format attendu par le plugin
**Tokens Studio for Figma**. Pour connecter Figma :

1. Le repo doit être poussé sur un remote Git (GitHub/GitLab) — c'est
   une action manuelle côté compte perso de Marjorie, pas automatisée
   ici.
2. Dans Figma, installer le plugin Tokens Studio, puis dans ses
   réglages : Settings → Sync → ajouter le repo, en pointant vers le
   dossier `tokens/` (branche + chemin).
3. Une fois connecté, Tokens Studio lit `$themes.json`/`$metadata.json`
   et les token sets `core`/`semantic`, et peut pousser les styles Figma
   correspondants (couleurs, typographies) directement dans les
   bibliothèques de composants Figma.
4. Le sens recommandé : le code reste la source de vérité. Toute
   modification de marque se fait dans `tokens/*.json` → `npm run
   tokens:build` → commit → Tokens Studio la récupère côté Figma. Éviter
   d'éditer les tokens depuis Figma en sens inverse sans repasser par une
   revue de PR, pour ne pas désynchroniser le code.

## Limites connues

- **Runner de tests automatisés (`npx vitest run`) actuellement cassé** :
  le pipeline Storybook 10 + Vite 8 + `@storybook/addon-vitest` (mode
  navigateur Playwright) échoue à l'import à cause d'un problème
  d'interopérabilité CJS/ESM sur plusieurs dépendances en cascade
  (`aria-query`, `lz-string`, `pretty-format`...) — bug d'écosystème
  documenté côté Storybook (voir issues storybookjs/storybook #33067 et
  #33091), pas lié au code de ce design system. Deux dépendances ont déjà
  été ajoutées à `optimizeDeps.include` dans `vite.config.ts` sans
  suffire à débloquer complètement la chaîne. **En attendant un correctif
  amont**, faire la vérification AA via le panneau d'accessibilité
  intégré à l'interface de Storybook (`npm run storybook`, onglet
  "Accessibility" sous chaque story) — celui-ci fonctionne normalement,
  seul le runner CI headless est affecté.

- Les valeurs de `tokens/core.json` et `semantic.json` sont des
  **placeholders** (palette indigo/teal générique) : elles doivent être
  remplacées par la charte graphique réelle de Logbook (couleurs de
  marque, police). Après remplacement, relancer `npm run tokens:build`
  et vérifier l'addon a11y pour confirmer que les nouvelles couleurs
  respectent toujours le AA.
- La police par défaut est "Inter" (`tokens/core.json` →
  `fontFamilies`), à remplacer si Logbook a une police de marque
  spécifique — penser à l'importer (Google Fonts, fichier local, etc.)
  en plus de changer le token.
