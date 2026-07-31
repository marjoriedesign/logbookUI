import { useRef } from 'react';
import type { DragEvent, KeyboardEvent } from 'react';
import { Box, Card, Typography } from '@mui/material';
import { RiUploadCloudLine } from '../icons';
import { designTokens } from '../theme/generated/tokens';

export interface LogbookDropzoneProps {
  label?: string;
  helperText?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onFilesSelected?: (files: File[]) => void;
}

export function LogbookDropzone({
  label = 'Sélectionner un document',
  helperText = 'Sujet, corrigé, grille d’évaluation...',
  accept,
  multiple = true,
  disabled = false,
  onFilesSelected,
}: LogbookDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function openPicker() {
    if (!disabled) inputRef.current?.click();
  }

  function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    onFilesSelected?.(Array.from(fileList));
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    if (!disabled) handleFiles(event.dataTransfer.files);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPicker();
    }
  }

  return (
    <Card
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={openPicker}
      onKeyDown={handleKeyDown}
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
      sx={{
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 1,
        p: 2,
        // Contour en pointillé, propre à ce composant : le reste du DS garde
        // le contour plein de MuiCard (theme/components/Card.ts inchangé).
        borderStyle: 'dashed',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background-color 0.15s ease, border-color 0.15s ease',
        // Fond/contour au survol : le token action.hover (#fdfaf3) est
        // identique au fond de repos de la Card (même beige, paper-elevation-1)
        // et serait donc invisible ici — secondary.subtle.background (un cran
        // plus saturé) sert de fond survolé à la place, avec le contour qui
        // passe en primary.main pour renforcer l'affordance "dépose ici".
        ...(!disabled && {
          '&:hover': {
            backgroundColor: designTokens.color.secondary.subtle.background,
            borderColor: designTokens.color.primary.main,
          },
        }),
      }}
    >
      <RiUploadCloudLine size={32} color={designTokens.color.purple[500]} />
      <Typography variant="h5" color="textPrimary">
        {label}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {helperText}
      </Typography>
      <Box
        component="input"
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={(event) => handleFiles(event.target.files)}
        onClick={(event) => event.stopPropagation()}
        sx={{ display: 'none' }}
      />
    </Card>
  );
}
