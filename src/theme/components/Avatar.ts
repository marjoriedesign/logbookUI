import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

const { color } = designTokens;

// Le fallback natif MUI pour un Avatar sans image/couleur choisie
// (`colorDefault`, ex. le "+N" généré par AvatarGroup) est en dehors du
// nuancier (#bdbdbd + texte blanc, 1.87:1, échoue l'AA). Repris sur le même
// principe que les avatars "Initiales" (cf. stories/Components/Avatar) :
// fond pastel (secondary.subtle.background, grey.200) + texte text.secondary,
// 8.42:1.
export const MuiAvatar: Components<Theme>['MuiAvatar'] = {
  styleOverrides: {
    colorDefault: {
      backgroundColor: color.secondary.subtle.background,
      color: color.text.secondary,
    },
  },
};
