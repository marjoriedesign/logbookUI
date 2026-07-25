import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

const { color } = designTokens;

// Dimensions imposées par Marjorie (36×22px de piste, rond 16×16px) : aucun
// cran de spacing existant ne vaut ces tailles, exception explicite plutôt
// qu'un token, cf. CLAUDE.md "valeurs en dur". Piste et racine partagent la
// même taille (padding racine à 0) ; le rond est centré via le padding de
// switchBase (3px), d'où le translateX de 14px à l'état coché
// (36 - 16 - 2*3 = 14).
const trackWidth = 36;
const trackHeight = 22;
const thumbSize = 16;
const thumbInset = 3;
const checkedTranslate = trackWidth - thumbSize - 2 * thumbInset;

export const MuiSwitch: Components<Theme>['MuiSwitch'] = {
  styleOverrides: {
    root: {
      width: trackWidth,
      height: trackHeight,
      padding: 0,
    },
    switchBase: {
      padding: thumbInset,
      '&.Mui-checked': {
        transform: `translateX(${checkedTranslate}px)`,
      },
    },
    thumb: {
      width: thumbSize,
      height: thumbSize,
      // Pas d'ombre portée sur ce composant.
      boxShadow: 'none',
    },
    track: {
      borderRadius: trackHeight / 2,
      // Fonds pleins/transparents pilotés explicitement par couleur
      // ci-dessous plutôt que par l'opacité native de MUI.
      opacity: 1,
    },
  },
  variants: [
    // Primary : rond blanc (contrastText) dans tous les cas. Piste beige
    // (secondary.main) à l'état off, piste pleine primary.main uniquement à
    // l'état activé — la couleur de fond distingue donc bien on/off, en plus
    // de la position du rond. Le sélecteur composé `.Mui-checked + .track`
    // est nécessaire pour l'emporter sur la règle "off" ci-dessus, qui a la
    // même spécificité que la règle native de MUI pour cet état.
    {
      props: { color: 'primary' },
      style: {
        '& .MuiSwitch-track': {
          backgroundColor: color.secondary.main,
          border: 'none',
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: color.primary.main,
          // MUI applique nativement `opacity: 0.5` sur ce même sélecteur
          // composé à l'état coché (même spécificité) : sans ce override
          // explicite, le fond reste bien primary.main en valeur mais
          // apparaît délavé à l'écran, mélangé à 50% avec l'arrière-plan.
          opacity: 1,
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: color.primary.contrastText,
        },
      },
    },
    // Disabled : piste transparente avec contour beige (secondary.main),
    // rond beige — même logique que Secondary Outlined sur Button, appliquée
    // ici à l'état désactivé plutôt qu'à une couleur "secondary" (qui
    // n'existe pas comme variante de couleur sur ce composant). Placée en
    // dernier dans le tableau et ciblée via des sélecteurs composés
    // (`.Mui-disabled` + `.Mui-checked`) pour l'emporter sur les règles
    // natives de MUI et sur la variante primary ci-dessus, qui utilisent la
    // même spécificité.
    {
      props: { disabled: true },
      style: {
        '& .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track': {
          backgroundColor: 'transparent',
          border: `1px solid ${color.secondary.main}`,
          opacity: 1,
        },
        '& .MuiSwitch-switchBase.Mui-disabled .MuiSwitch-thumb': {
          backgroundColor: color.secondary.main,
        },
      },
    },
  ],
};
