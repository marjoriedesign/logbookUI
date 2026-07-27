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
    }),
    // Header demandé sur un fond beige (background.paper, {color.grey.50}
    // = #fdfaf3, cf. palette.ts) encadré d'un contour beige (même
    // theme.palette.divider qu'ailleurs) et arrondi à 8px
    // (borderRadius.md) sur les coins extérieurs de la rangée d'en-tête.
    head: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
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
