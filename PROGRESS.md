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

## En cours / à moitié fait

- `CorrectionsTable` : première version livrée dans Storybook (données de démo), pas encore confrontée à l'implémentation réelle côté app Logbook.
- Aucun contournement appliqué pour l'alerte axe-core `aria-conditional-attr` déclenchée par `Checkbox indeterminate` (comportement délibéré de MUI, pas un défaut du thème — documenté dans SKILL.md, pas traité).
- Runner de tests automatisés (`npx vitest run`) cassé : incompatibilité CJS/ESM en cascade (`aria-query`, `lz-string`, `pretty-format`...) sur la pile Storybook 10 + Vite 8 + `@storybook/addon-vitest` — bug d'écosystème upstream, pas de fix côté projet à ce stade.

## Décisions en attente

- **Version MUI** : v9 utilisée actuellement, non tranchée — à valider avec l'équipe dev Logbook avant toute nouvelle génération de composants.
- **Chip vs Bouton pour la colonne État de `CorrectionsTable`** : convention actuelle dans le Storybook — chip pour un statut passif ("Rendue", "Consultée"), bouton pour une action à faire ("À corriger", "À analyser") — pas encore validée contre l'implémentation prod réelle.
- **`typography.button`** : pas de token composite dédié (seules les tailles `small`/`medium`/`large` existent) — à définir côté Figma.

## Prochaine étape

1. Brancher Figma via le plugin Tokens Studio depuis le repo GitHub (le repo est déjà poussé, condition remplie) — process détaillé dans `.claude/skills/logbook-design-system/SKILL.md`, section "Synchroniser avec Figma".
2. Générer la bibliothèque de composants Figma correspondante depuis Tokens Studio.
