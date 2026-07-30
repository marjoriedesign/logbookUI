import type { ReactNode } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import { designTokens } from '../theme/generated/tokens';

export interface LogbookCommentFieldProps extends Omit<TextFieldProps, 'variant' | 'label'> {
  /** Icône de la catégorie (ex. pouce levé pour "Points positifs"), déjà dimensionnée/colorée par l'appelant. */
  icon: ReactNode;
  label: string;
}

// TextField MUI légèrement modifié (rayon plus généreux, pas de label
// flottant dans le contour) pour les commentaires de correction du prof
// dans le side panel (ex. "Points positifs" / "Points à améliorer"), une
// fois l'audio analysé. Le TextField MUI standard (theme/components/TextField.ts)
// reste inchangé pour le reste de l'app — ce composant ne le remplace pas,
// il s'ajoute à côté pour cet usage précis.
export function LogbookCommentField({
  icon,
  label,
  multiline = true,
  minRows = 2,
  sx,
  slotProps,
  ...textFieldProps
}: LogbookCommentFieldProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        {icon}
        <Typography variant="h4" color="text.primary">
          {label}
        </Typography>
      </Box>
      <TextField
        variant="outlined"
        fullWidth
        multiline={multiline}
        minRows={minRows}
        // Le libellé "Points positifs" est un Typography décoratif au-dessus
        // du champ (le <label>/legend flottant de MUI est volontairement
        // absent du contour) : sans lien programmatique, le champ resterait
        // sans nom accessible pour un lecteur d'écran. slotProps.htmlInput
        // (pas le inputProps historique, retiré de TextFieldProps en v9).
        slotProps={{ htmlInput: { 'aria-label': label }, ...slotProps }}
        sx={[
          {
            // Rayon plus généreux que le TextField MUI standard (radius.sm) :
            // exception locale à ce composant seulement, cf. commentaire
            // ci-dessus. Couleur/épaisseur du contour héritées telles
            // quelles du thème global (secondary.main).
            '& .MuiOutlinedInput-root': {
              borderRadius: `${designTokens.borderRadius.lg}px`,
            },
          },
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
        {...textFieldProps}
      />
    </Box>
  );
}
