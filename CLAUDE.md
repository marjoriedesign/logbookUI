# CLAUDE.md — Logbook Design System

Règles non négociables. Le mode d'emploi est dans `.claude/skills/logbook-design-system/SKILL.md` — ne pas y toucher ici.

## Source de vérité
- Le code est la seule source de vérité des tokens et des composants, jamais l'inverse.
- Un écran Figma peut servir de modèle d'entrée, mais doit être recomposé uniquement avec les composants existants du design system.
- Besoin non couvert par un composant existant → signaler à Marjorie pour arbitrage. Jamais de composant à usage unique pour contourner.

## Version MUI
- Actuellement v9 — **à confirmer**, non tranché. Valider avec l'équipe dev Logbook avant toute nouvelle génération de composants.

## Modifier un composant MUI (ordre strict)
1. `defaultProps` / `styleOverrides` / variants
2. Wrapper
3. Fork d'un composant MUI — dernier recours, avec justification écrite dans le fichier

## Valeurs en dur
- Interdites : couleurs, espacements, typographie, rayons passent par le thème / les tokens. L'échelle d'espacement passe par `theme.spacing`.
- Exception admise seulement là où l'API MUI l'impose (paddings internes via `styleOverrides`, `shape.borderRadius`, ombres) : la valeur doit alors dériver d'un token, ou être commentée comme exception explicite.

## Qualité
- Responsive et accessibilité AA : non négociables sur chaque composant livré.

## Fin de session
- Mettre à jour `PROGRESS.md` avant de clôturer : fait/validé, en cours, décisions en attente, prochaine étape. Factuel uniquement.
