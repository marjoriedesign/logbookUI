import { forwardRef } from 'react';
import { IconButton } from '@mui/material';
import type { IconButtonProps } from '@mui/material';
import { designTokens } from '../theme/generated/tokens';

// Aligné sur la bibliothèque Figma de Marjorie, qui n'a pas de notion de
// `variant` séparée : chaque `color` détermine à elle seule un rendu fixe
// (contrairement à MUI natif, où `color` ne fait que teinter l'icône sur
// fond transparent, pareil pour toutes les couleurs). `default`/`inherit`
// gardent ce comportement natif — aucun traitement dédié pour ces deux-là.
export type LogbookIconButtonProps = IconButtonProps;

type SemanticColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

const { color } = designTokens;

// primary/secondary délibérément inversés par rapport aux tokens de palette
// du même nom (voir Button.ts) : ce sont les rendus attendus par le fichier
// Figma de Marjorie pour IconButton précisément, pas un alignement sur les
// autres composants.
const styles: Record<SemanticColor, { [key: string]: string | { backgroundColor: string } }> = {
  // Contour beige (color.secondary.main) + icône color.secondary.contrastText.
  primary: {
    border: `1px solid ${color.secondary.main}`,
    color: color.secondary.contrastText,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: color.secondary.main },
  },
  // Fond plein color.primary.main + icône blanche (color.primary.contrastText).
  // ⚠️ Survol : MUI bascule nativement vers color.primary.dark (#4ad09a, un
  // vert) — incohérence connue du nuancier, déjà documentée sur Button,
  // reproduite à l'identique.
  secondary: {
    backgroundColor: color.primary.main,
    color: color.primary.contrastText,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: color.primary.dark },
  },
  warning: {
    backgroundColor: color.warning.main,
    color: color.warning.contrastText,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: color.warning.dark },
  },
  // .dark au lieu de .main : même correction AA que Button contained
  // (cf. Button.ts) — .main est trop pastel pour porter le contrastText blanc.
  success: {
    backgroundColor: color.success.dark,
    color: color.success.contrastText,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: color.success.dark },
  },
  error: {
    backgroundColor: color.error.dark,
    color: color.error.contrastText,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: color.error.dark },
  },
  info: {
    backgroundColor: color.info.main,
    color: color.info.contrastText,
    borderRadius: `${designTokens.borderRadius.md}px`,
    '&:hover': { backgroundColor: color.info.dark },
  },
};

function isSemanticColor(value: IconButtonProps['color']): value is SemanticColor {
  return !!value && value !== 'default' && value !== 'inherit';
}

export const LogbookIconButton = forwardRef<HTMLButtonElement, LogbookIconButtonProps>(
  function LogbookIconButton({ color: colorProp = 'primary', sx, ...props }, ref) {
    const variantSx = isSemanticColor(colorProp) ? styles[colorProp] : {};

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
