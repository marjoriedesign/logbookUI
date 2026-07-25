import { forwardRef } from 'react';
import { IconButton } from '@mui/material';
import type { IconButtonProps } from '@mui/material';
import { designTokens } from '../theme/generated/tokens';

// Wrapper (cf. CLAUDE.md, ordre de modification des composants MUI) :
// IconButton n'a nativement aucune prop `variant` (contrairement à
// Button/Chip, cf. @mui/material/IconButton — pas d'interface
// IconButtonPropsVariantOverrides), donc impossible à ajouter via
// `theme.components.MuiIconButton.variants`. Les couleurs reprennent
// exactement celles déjà validées sur Button (src/theme/components/Button.ts).
export type LogbookIconButtonVariant = 'filled' | 'outlined';

type SemanticColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export interface LogbookIconButtonProps extends IconButtonProps {
  variant?: LogbookIconButtonVariant;
}

const { color } = designTokens;

// Hover : même mécanique que Button contained (cf. Button.js MUI natif) —
// le fond bascule vers `.dark` au survol. Pour success/error, le repos est
// déjà `.dark` (correction AA), donc pas de changement visible au survol :
// c'est déjà l'état actuel de Button, pas une régression introduite ici.
// ⚠️ primary.dark (#4ad09a) est une valeur incohérente du nuancier (un vert,
// pas une nuance de teal) : Button Primary Contained a donc déjà ce même
// hover qui vire au vert aujourd'hui. Reproduit ici à l'identique plutôt que
// corrigé en douce — signalé séparément pour arbitrage sur le token.
const filledStyles: Record<SemanticColor, { backgroundColor: string; color: string; '&:hover': { backgroundColor: string } }> = {
  primary: {
    backgroundColor: color.primary.main,
    color: color.primary.contrastText,
    '&:hover': { backgroundColor: color.primary.dark },
  },
  secondary: {
    backgroundColor: color.secondary.main,
    color: color.secondary.contrastText,
    '&:hover': { backgroundColor: color.secondary.dark },
  },
  warning: {
    backgroundColor: color.warning.main,
    color: color.warning.contrastText,
    '&:hover': { backgroundColor: color.warning.dark },
  },
  // .dark au lieu de .main : même correction AA que Button contained
  // (cf. Button.ts) — .main est trop pastel pour porter le contrastText blanc.
  success: {
    backgroundColor: color.success.dark,
    color: color.success.contrastText,
    '&:hover': { backgroundColor: color.success.dark },
  },
  error: {
    backgroundColor: color.error.dark,
    color: color.error.contrastText,
    '&:hover': { backgroundColor: color.error.dark },
  },
  info: {
    backgroundColor: color.info.main,
    color: color.info.contrastText,
    '&:hover': { backgroundColor: color.info.dark },
  },
};

// Hover : Button outlined applique nativement un léger lavis de la couleur
// (alpha(main, hoverOpacity)) au survol, cf. Button.js. `color-mix` reproduit
// cet effet sans nécessiter le helper `alpha` du thème (accessible seulement
// via une fonction de style, pas dans un objet sx statique).
function outlinedHoverWash(hex: string) {
  return `color-mix(in srgb, ${hex} 8%, transparent)`;
}

const outlinedStyles: Record<SemanticColor, { border: string; color: string; borderRadius: string; '&:hover': { backgroundColor: string } }> = {
  primary: {
    border: `1px solid ${color.primary.main}`,
    color: color.primary.main,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: outlinedHoverWash(color.primary.main) },
  },
  // Contour en .main (beige) + icône en contrastText : identique à
  // Secondary Outlined sur Button, cf. Button.ts. Au survol, fond plein en
  // secondary.main (au lieu du lavis léger) : l'icône contrastText reste
  // lisible dessus, même combinaison que Secondary Filled.
  secondary: {
    border: `1px solid ${color.secondary.main}`,
    color: color.secondary.contrastText,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: color.secondary.main },
  },
  warning: {
    border: `1px solid ${color.warning.contrastText}`,
    color: color.warning.contrastText,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: outlinedHoverWash(color.warning.contrastText) },
  },
  success: {
    border: `1px solid ${color.success.dark}`,
    color: color.success.dark,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: outlinedHoverWash(color.success.dark) },
  },
  error: {
    border: `1px solid ${color.error.dark}`,
    color: color.error.dark,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: outlinedHoverWash(color.error.dark) },
  },
  info: {
    border: `1px solid ${color.info.dark}`,
    color: color.info.dark,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: outlinedHoverWash(color.info.dark) },
  },
};

function isSemanticColor(value: IconButtonProps['color']): value is SemanticColor {
  return !!value && value !== 'default' && value !== 'inherit';
}

export const LogbookIconButton = forwardRef<HTMLButtonElement, LogbookIconButtonProps>(
  function LogbookIconButton({ variant, color: colorProp = 'primary', sx, ...props }, ref) {
    let variantSx = {};
    if (variant === 'filled' && isSemanticColor(colorProp)) {
      // `borderRadius` en px explicite : un nombre brut serait multiplié par
      // theme.shape.borderRadius par le transform sx (8 × 8 = 64px sinon).
      variantSx = { ...filledStyles[colorProp], borderRadius: `${designTokens.borderRadius.md}px` };
    } else if (variant === 'outlined' && isSemanticColor(colorProp)) {
      variantSx = outlinedStyles[colorProp];
    }

    return (
      <IconButton
        ref={ref}
        color={colorProp}
        sx={[variantSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
        {...props}
      />
    );
  },
);
