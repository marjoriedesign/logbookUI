import type { Components, Theme } from '@mui/material/styles';

// AvatarGroup natif remplit la largeur du parent (display:flex sans largeur
// contrainte), puis empile ses enfants à droite via flex-direction:row-reverse
// + justify-content par défaut. `width: fit-content` le fait se comporter
// comme un élément normal aligné à gauche, sans toucher au mécanisme
// d'empilement/chevauchement natif.
export const MuiAvatarGroup: Components<Theme>['MuiAvatarGroup'] = {
  defaultProps: {
    // Resserre les avatars : -16px de chevauchement (natif MUI) au lieu du
    // -8px par défaut.
    spacing: 'small',
  },
  styleOverrides: {
    root: {
      width: 'fit-content',
    },
    // MUI empile nativement les avatars par ordre du DOM (le dernier enfant
    // du DOM — visuellement le plus à gauche, du fait de row-reverse — passe
    // au-dessus). Inversé ici : le premier enfant du DOM (visuellement le
    // plus à droite) reçoit le z-index le plus élevé, donc passe au-dessus
    // des avatars à sa gauche. Couvre jusqu'à 10 avatars, largement au-delà
    // du `max` par défaut d'AvatarGroup (5).
    avatar: Object.fromEntries(
      Array.from({ length: 10 }, (_, i) => [`&:nth-of-type(${i + 1})`, { zIndex: 10 - i }]),
    ),
  },
};
