import { Avatar, Box, Typography } from '@mui/material';
import { RiCloseLine } from '../icons';
import { designTokens } from '../theme/generated/tokens';
import { LogbookIconButton } from './LogbookIconButton';

export interface LogbookSidePanelHeaderProps {
  studentName: string;
  avatarSrc?: string;
  avatarAlt?: string;
  onClose?: () => void;
}

export function LogbookSidePanelHeader({ studentName, avatarSrc, avatarAlt, onClose }: LogbookSidePanelHeaderProps) {
  return (
    <Box
      sx={{
        width: 480,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        backgroundColor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.xs}px` }}>
        <Avatar src={avatarSrc} alt={avatarAlt ?? ''} sx={{ width: 48, height: 48 }} />
        <Typography variant="h4" color="text.secondary">
          {studentName}
        </Typography>
      </Box>
      <LogbookIconButton color="primary" size="small" aria-label="Fermer" onClick={onClose}>
        <RiCloseLine size="1em" />
      </LogbookIconButton>
    </Box>
  );
}
