import { Avatar, Box, Typography } from '@mui/material';
import { RiCloseLine } from '../icons';
import { designTokens } from '../theme/generated/tokens';
import { LogbookIconButton } from './LogbookIconButton';

export interface LogbookSidePanelHeaderStudent {
  name: string;
  avatarSrc?: string;
  avatarAlt?: string;
}

export interface LogbookSidePanelHeaderProps {
  /** Un seul élève : header classique (avatar 48px + nom). Plusieurs : avatars
   * superposés + noms sur 1-2 lignes (ex. correction d'un devoir de groupe). */
  students: LogbookSidePanelHeaderStudent[];
  onClose?: () => void;
}

export function LogbookSidePanelHeader({ students, onClose }: LogbookSidePanelHeaderProps) {
  const isGroup = students.length > 1;

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 480 },
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        // paper-elevation-0 plutôt que theme.palette.background.paper
        // (paper-elevation-1, réservé ailleurs) : non câblé sur palette.ts,
        // lu directement depuis designTokens (même pattern que MuiTable).
        backgroundColor: designTokens.color.background['paper-elevation-0'],
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      {isGroup ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.xs}px`, minWidth: 0 }}>
          {/* Avatars légèrement superposés : chaque avatar après le premier
              chevauche le précédent (margin négative), avec un liseré de la
              couleur de fond du panel pour les séparer visuellement. */}
          <Box sx={{ display: 'flex', flexShrink: 0 }}>
            {students.map((student, index) => (
              <Avatar
                key={index}
                src={student.avatarSrc}
                alt={student.avatarAlt ?? ''}
                sx={{
                  width: 40,
                  height: 40,
                  ml: index === 0 ? 0 : -1.5,
                  border: '2px solid',
                  borderColor: designTokens.color.background['paper-elevation-0'],
                }}
              />
            ))}
          </Box>
          <Typography
            variant="h4"
            color="textSecondary"
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
            }}
          >
            {students.map((student) => student.name).join(', ')}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.xs}px` }}>
          <Avatar src={students[0]?.avatarSrc} alt={students[0]?.avatarAlt ?? ''} sx={{ width: 48, height: 48 }} />
          <Typography variant="h4" color="textSecondary">
            {students[0]?.name}
          </Typography>
        </Box>
      )}
      <LogbookIconButton color="primary" size="small" aria-label="Fermer" onClick={onClose}>
        <RiCloseLine size="1em" />
      </LogbookIconButton>
    </Box>
  );
}
