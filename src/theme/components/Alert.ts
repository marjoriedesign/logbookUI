import type { Components, Theme } from '@mui/material/styles';
import { designTokens } from '../generated/tokens';

const { color } = designTokens;

type Severity = 'success' | 'warning' | 'error' | 'info';

// Icône/contour : même logique que Button (cf. Button.ts) — .dark pour
// success/error/info (assez saturé pour l'AA, 3.5–6.7:1 sur fond .light,
// 4.66–7.94:1 sur blanc), .contrastText pour warning dont .main et .dark
// restent tous deux trop pâles pour tenir le seuil UI de 3:1.
const accentColor: Record<Severity, string> = {
  success: color.success.dark,
  warning: color.warning.contrastText,
  error: color.error.dark,
  info: color.info.dark,
};

// Filled : même correction AA que Button/Chip contained — .main est trop
// pastel pour porter un texte blanc à 4.5:1 sur success/error, donc .dark ;
// warning/info gardent .main (déjà lisible avec contrastText, 6.12–7.36:1).
const filledBackground: Record<Severity, string> = {
  success: color.success.dark,
  warning: color.warning.main,
  error: color.error.dark,
  info: color.info.main,
};

const severities: Severity[] = ['success', 'warning', 'error', 'info'];

// typography.alert.title était défini dans les tokens (16/400/24, Zain)
// mais jamais consommé — AlertTitle héritait du style par défaut de MUI
// (subtitle2 + margin). Couleur en text.primary (noir), pas la couleur
// héritée de la variante (ex. info.contrastText en filled) : demandé par
// Marjorie pour que le titre ressorte davantage que le corps du message.
const alertTitleTypography = designTokens.typography.alert.title;

export const MuiAlertTitle: Components<Theme>['MuiAlertTitle'] = {
  styleOverrides: {
    root: {
      fontFamily: alertTitleTypography.fontFamily,
      fontWeight: alertTitleTypography.fontWeight,
      fontSize: alertTitleTypography.fontSize,
      lineHeight: `${alertTitleTypography.lineHeight}px`,
      color: color.text.primary,
    },
  },
};

export const MuiAlert: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    root: {
      borderRadius: designTokens.borderRadius.md,
    },
  },
  variants: [
    ...severities.map((severity) => ({
      props: { variant: 'standard' as const, colorSeverity: severity },
      style: {
        backgroundColor: color[severity].light,
        color: color.text.secondary,
        '& .MuiAlert-icon': { color: accentColor[severity] },
      },
    })),
    ...severities.map((severity) => ({
      props: { variant: 'outlined' as const, colorSeverity: severity },
      style: {
        borderColor: accentColor[severity],
        color: color.text.secondary,
        '& .MuiAlert-icon': { color: accentColor[severity] },
      },
    })),
    ...severities.map((severity) => ({
      props: { variant: 'filled' as const, colorSeverity: severity },
      style: {
        backgroundColor: filledBackground[severity],
        color: color[severity].contrastText,
      },
    })),
  ],
};
