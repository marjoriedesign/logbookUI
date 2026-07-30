import type { ReactNode } from 'react';
import { Box, Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { designTokens } from '../theme/generated/tokens';

export interface LogbookSidePanelFooterAction {
  label: ReactNode;
  onClick?: () => void;
  /** Non renseigné : garde le variant par défaut du thème (`contained`). */
  variant?: ButtonProps['variant'];
  /** Non renseigné : `primary` pour l'action principale, `warning` pour la secondaire. */
  color?: ButtonProps['color'];
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export interface LogbookSidePanelFooterProps {
  /** Action principale, seule à droite si `secondaryAction` est fourni. */
  primaryAction: LogbookSidePanelFooterAction;
  /** Action secondaire, affichée à gauche de la principale. */
  secondaryAction?: LogbookSidePanelFooterAction;
}

function ActionButton({
  action,
  defaultColor,
}: {
  action: LogbookSidePanelFooterAction;
  defaultColor?: ButtonProps['color'];
}) {
  return (
    <Button
      variant={action.variant}
      color={action.color ?? defaultColor}
      size="large"
      disabled={action.disabled}
      startIcon={action.startIcon}
      endIcon={action.endIcon}
      onClick={action.onClick}
      // basis 'auto' (contenu) plutôt que 0 : l'espace excédentaire se
      // répartit à parts égales entre les deux boutons, mais celui dont le
      // libellé est plus long part d'une base plus large et reste donc plus
      // large à l'arrivée, au lieu d'un partage strictement 50/50.
      sx={{ flex: '1 1 auto' }}
    >
      {action.label}
    </Button>
  );
}

// Bas de side panel : 1 ou 2 boutons d'action principaux (ex. "Envoyer la
// correction" seul, ou "Annuler" + "Envoyer"). Pendant du haut de panel
// LogbookSidePanelHeader.
export function LogbookSidePanelFooter({ primaryAction, secondaryAction }: LogbookSidePanelFooterProps) {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 480 },
        boxSizing: 'border-box',
        // paper-elevation-0 : même pattern que LogbookSidePanelHeader (non
        // câblé sur palette.ts, lu directement depuis designTokens).
        backgroundColor: designTokens.color.background['paper-elevation-0'],
        borderTop: '1px solid',
        borderColor: 'divider',
        p: 2,
        display: 'flex',
        gap: 1,
      }}
    >
      {secondaryAction && <ActionButton action={secondaryAction} defaultColor="warning" />}
      <ActionButton action={primaryAction} />
    </Box>
  );
}
