# PROGRESS.md — journal d'avancement

Factuel uniquement. Mis à jour à la fin de chaque session (cf. CLAUDE.md).

## Fait et validé

- Scaffold initial : MUI v9 + RemixIcon, Storybook, pipeline de tokens (Tokens Studio → `tokens:build` → thème).
- Charte réelle Logbook (palette teal/corail, police Zain) intégrée dans `tokens/core.json` et `tokens/semantic.json`.
- `semantic.json` référence désormais `core.json` par pointeurs (`"value": "{color.cyan.900}"`) plutôt que par valeurs figées, sur toutes les couleurs sauf `common.white`/`common.black` (primitives dédiées, aucune rampe n'a de blanc/noir pur).
- Rampes `yellow`/`orange` remplacées par les teintes moins vibrantes fournies par Marjorie.
- Échelle de spacing étendue avec deux crans fins en bas d'échelle : `2xs` (6px), `3xs` (4px).
- Audit AA (WCAG) mené sur Button et Chip : contrastes corrigés (`contained` success/error → palier `.dark`, `filled` Chip success/error/warning → `.dark`), nouveau palier Chip `subtle` (fond pastel + texte sur `text.secondary`) pour les statuts discrets.
- Contraste du fallback "+N" d'`AvatarGroup` corrigé (1.87:1 → 8.42:1).
- Typography : `h4`–`h6`, `subtitle1`/`subtitle2`, `caption`, `overline` branchés sur leurs tokens (définis mais inutilisés jusqu'ici).
- Composants MUI thémés (`src/theme/components/`) : Button, IconButton, Switch, Badge, Avatar, AvatarGroup, Alert, Checkbox, Select, Chip, Table, TextField, Card, AppBar, Toolbar, FormControlLabel.
- Wrappers Logbook sans équivalent MUI natif (`src/components/`) : `LogbookIconButton`, `LogbookNavbar`, `LogbookListenProgress`.
- Composant produit `CorrectionsTable` (catégorie Storybook Logbook, distincte de Components) : suivi des corrections, switch de remise, chips/boutons d'état, icônes ballpen/bard, écoute, note, réaction ; header responsive robuste (colonnes retirées du DOM sous 900px, pas juste masquées) ; tri sur la colonne Élève.
- Storybook : un composant = une seule page ; interlignage 120% harmonisé sur toutes les pages ; build/déploiement Storybook et Chromatic réactivés.
- `tsconfig` strict activé.
- Repo Git poussé sur GitHub (`origin/main` = `github.com/marjoriedesign/logbookUI`, à jour avec le local).
- Champs `_states` (selected/focus/focusVisible/outlinedBorder par couleur, `action.active/selected/focus/disabled/disabledBackground`, `common.black_states`/`white_states`) nettoyés dans `tokens/semantic.json` : remplacés par les vraies valeurs par défaut de MUI (superpositions alpha sur `main`/noir/blanc aux opacités officielles MUI 4/8/12/50%, encodées en hex 8 chiffres) au lieu des couleurs pleines placeholder jamais nettoyées de l'export Tokens Studio initial. `action.active/selected/focus/disabled/disabledBackground` câblé explicitement dans `palette.ts` (purement déclaratif, aucun changement de rendu — `action.hover` et `success/error/warning/info._states.hover`, seuls champs déjà consommés par `Button.ts`, restent inchangés). Documenté dans le README, section "Autres champs `_states`".
- `typography.button.small/medium/large` : converti en vrai token composite (fontSize/fontWeight/lineHeight/letterSpacing/textCase), verrouillant ce que `Button.ts` rendait déjà (fontWeight 700, lineHeight 120%, letterSpacing 0 — MUI n'applique son calcul de letterSpacing par défaut que si `fontFamily` reste Roboto, jamais le cas ici puisque le thème force Zain). `Button.ts`/`Chip.ts` mis à jour pour lire `.fontSize` sur l'objet composite au lieu d'un nombre brut. Aucun changement de rendu.
- Page Foundations/Typography : passée d'une liste de 6 variantes codées en dur à un parcours générique des 34 styles de `tokens/semantic.json`, tout niveau d'imbrication confondu.
- Storybook : panneau Controls désactivé sur les 20 pages sans props pilotables (5 Foundations + 15 démos statiques), gardé sur les 6 pages avec de vraies `args`/`argTypes` (Button, Chip, IconButton, Switch, TextField, Logbook/ListenProgress).
- Storybook déployé sur GitHub Pages (`npm run deploy-storybook`, branche `gh-pages`) : reflète l'état courant.
- Doc "À savoir" sur les pages Components (pas Logbook, qui assemble des composants déjà documentés individuellement) : décisions/exceptions importantes par composant (corrections AA, overrides de comportement natif MUI, valeurs figées justifiées, incohérences connues comme `primary.dark` vert sur IconButton). D'abord testée avec un détail complet des tokens par composant, simplifiée sur demande de Marjorie : encadré beige (`secondary.subtle.background`) avec icône ampoule, affiché après la démo plutôt qu'avant.
- Nouvelle page `Foundations/Tokens` (après Visuals) : liste les tokens de couleur façon Figma (icône palette + nom, swatch + référence "famille / cran", en-têtes "groupe / sous-groupe"). **Core** lit `tokens/core.json` brut et n'affiche que les familles/crans réellement référencés par Theme (9 familles sur les 19 complètes du nuancier Material importé). **Theme** parcourt `tokens/semantic.json` (pas `designTokens/generated`, qui a résolu chaque référence en hex et perdu l'alias d'origine) pour retrouver la chaîne "cyan / 900", et fusionne automatiquement les champs qui résolvent à la même valeur (ex. les 24 `paper-elevation-N` à blanc).
- `Chip.ts` relié à `typography.chip.label` (13px/400/18px) au lieu de réutiliser `typography.button.small` — le texte des chips passe de bold à regular (changement visuel assumé).
- Tokens `strong.background` ajoutés pour error/warning (`{color.orange.800}`) et info (`{color.teal.700}`, remplace l'ancien `{color.deeppurple.700}` hors palette) : le fond "Strong" de Chip ne lit plus les primitives `core.json` directement.
- Tokens `subtle.background` ajoutés pour success (`{color.green.100}`) et info (`{color.teal.100}`) ; celui de warning corrigé de `{color.orange.100}` (qui collisionnait avec error) à `{color.yellow.200}` — les 5 fonds "Subtle" de Chip viennent maintenant uniquement des tokens, plus aucune couleur posée en dur dans les stories.
- `Table` (`MuiTable`) a désormais un fond blanc explicite (`color.background['paper-elevation-0']`) au lieu de dépendre par transparence du fond de page (`background.default`) — même rendu, composant autonome.

## En cours / à moitié fait

- `CorrectionsTable` : première version livrée dans Storybook (données de démo), pas encore confrontée à l'implémentation réelle côté app Logbook.
- Aucun contournement appliqué pour l'alerte axe-core `aria-conditional-attr` déclenchée par `Checkbox indeterminate` (comportement délibéré de MUI, pas un défaut du thème — documenté dans SKILL.md, pas traité).
- Runner de tests automatisés (`npx vitest run`) cassé : incompatibilité CJS/ESM en cascade (`aria-query`, `lz-string`, `pretty-format`...) sur la pile Storybook 10 + Vite 8 + `@storybook/addon-vitest` — bug d'écosystème upstream, pas de fix côté projet à ce stade.

## Décisions en attente

- **Version MUI** : v9 utilisée actuellement, non tranchée — à valider avec l'équipe dev Logbook avant toute nouvelle génération de composants.
- **Chip vs Bouton pour la colonne État de `CorrectionsTable`** : convention actuelle dans le Storybook — chip pour un statut passif ("Rendue", "Consultée"), bouton pour une action à faire ("À corriger", "À analyser") — pas encore validée contre l'implémentation prod réelle.

## Prochaine étape

1. Brancher Figma via le plugin Tokens Studio depuis le repo GitHub (le repo est déjà poussé, condition remplie) — process détaillé dans `.claude/skills/logbook-design-system/SKILL.md`, section "Synchroniser avec Figma".
2. Générer la bibliothèque de composants Figma correspondante depuis Tokens Studio.
