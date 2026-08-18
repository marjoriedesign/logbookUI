import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

// border-radius n'a aucun effet visuel sur des cellules de table tant que
// la table est en borderCollapse: 'collapse' (comportement CSS standard
// des tables, indépendant de MUI) : on passe en 'separate' pour que
// l'arrondi du header (cf. MuiTableCell.head ci-dessous) s'affiche vraiment.
export const MuiTable: Components<Theme>['MuiTable'] = {
  styleOverrides: {
    root: {
      borderCollapse: 'separate',
      // Fond blanc explicite plutôt que transparent (qui ne montrait le
      // blanc que par transparence via le fond de page, background.default).
      // color.background['paper-elevation-0'] plutôt que
      // theme.palette.background.paper ('paper-elevation-1', grey.50, réservé
      // au header) : paper-elevation-0 n'est pas câblé sur palette.ts (seul
      // paper-elevation-1 l'est), donc lu directement depuis designTokens.
      backgroundColor: designTokens.color.background['paper-elevation-0'],
    },
  },
};

// MUI éclaircit nativement theme.palette.divider de 88% pour la bordure des
// cellules (cf. TableCell.js), ce qui rend le beige quasiment invisible.
// Bordure demandée bien visible en beige : on reprend theme.palette.divider
// tel quel, sans cet éclaircissement.
export const MuiTableCell: Components<Theme>['MuiTableCell'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderBottom: `1px solid ${theme.palette.divider}`,
      // Sous md, les tables (CorrectionsTable, tableau d'évaluations de
      // logbook-dashboard) débordaient de leur conteneur en mobile avec le
      // paddingInline 16px par défaut de MUI — réduit à spacing.xs (8px)
      // sous ce seuil pour que le tableau tienne dans la largeur avec un
      // padding de page de 16px, plutôt que de défiler horizontalement.
      // Head et body concernés (même règle sur root) pour que les colonnes
      // restent alignées entre l'en-tête et les lignes.
      [theme.breakpoints.down('md')]: {
        paddingInline: designTokens.spacing.xs,
      },
    }),
    // Padding vertical des lignes du corps réduit à 8px (spacing.xs) au lieu
    // des 16px par défaut de MUI ("medium") : demandé par Marjorie
    // spécifiquement sur les lignes, pas sur le header (qui garde son
    // padding normal). Padding horizontal (paddingInline) volontairement
    // inchangé, seul le vertical a été demandé.
    body: {
      paddingBlock: `${designTokens.spacing.xs}px`,
    },
    // Header demandé sur un fond beige (background.paper, {color.grey.50}
    // = #fdfaf3, cf. palette.ts) encadré d'un contour beige (même
    // theme.palette.divider qu'ailleurs) et arrondi à 8px
    // (borderRadius.md) sur les coins extérieurs de la rangée d'en-tête.
    // Texte demandé en text.secondary (au lieu du text.primary natif de
    // MUI pour variant="head") et en style subtitle1 (au lieu du
    // fontWeight medium/lineHeight 24px imposés par MUI) : body1 (20px)
    // essayé d'abord, jugé trop imposant pour un header de tableau ;
    // subtitle1 (16px) retenu à la place.
    head: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      ...theme.typography.subtitle1,
      borderTop: `1px solid ${theme.palette.divider}`,
      '&:first-of-type': {
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderTopLeftRadius: designTokens.borderRadius.md,
        borderBottomLeftRadius: designTokens.borderRadius.md,
      },
      '&:last-of-type': {
        borderRight: `1px solid ${theme.palette.divider}`,
        borderTopRightRadius: designTokens.borderRadius.md,
        borderBottomRightRadius: designTokens.borderRadius.md,
      },
    }),
  },
};
