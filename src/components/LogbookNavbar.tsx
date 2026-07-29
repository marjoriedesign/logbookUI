import { AppBar, Toolbar, Box, Button, Select, MenuItem, Badge } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { RiShareLine, RiFeedbackLine, RiNotificationLine, RiAccountCircleLine } from '../icons';
import { LogbookIconButton } from './LogbookIconButton';
import { designTokens } from '../theme/generated/tokens';
import logoGreen from '../assets/logo/LogoGreen.svg';

export interface LogbookNavbarClassOption {
  value: string;
  label: string;
}

export interface LogbookNavbarProps {
  classOptions: LogbookNavbarClassOption[];
  selectedClass: string;
  onClassChange: (value: string) => void;
  userName: string;
  notificationCount?: number;
  onShareAccess?: () => void;
  onFeedback?: () => void;
  onNotifications?: () => void;
  onProfile?: () => void;
}

// Menu du haut du produit Logbook : logo, sélecteur de classe + partage des
// accès à gauche, feedback/notifications/profil à droite. Composé à partir
// des composants déjà thémés (AppBar, Button Outlined Secondary, Select,
// LogbookIconButton, Badge) plutôt qu'un composant à usage unique, cf.
// CLAUDE.md.
export function LogbookNavbar({
  classOptions,
  selectedClass,
  onClassChange,
  userName,
  notificationCount = 0,
  onShareAccess,
  onFeedback,
  onNotifications,
  onProfile,
}: LogbookNavbarProps) {
  return (
    <AppBar position="static">
      {/* Padding géré par le thème (MuiToolbar, cf. theme/components/Toolbar.ts) */}
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.lg}px` }}>
          {/* Logo : masqué sous 900px (breakpoint md) pour laisser la place
              au reste de la navbar sur petit écran. */}
          <Box
            component="img"
            src={logoGreen}
            alt="Logbook"
            sx={{ height: 32, display: { xs: 'none', md: 'block' } }}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.sm}px` }}>
            <Select
              size="small"
              value={selectedClass}
              onChange={(event: SelectChangeEvent) => onClassChange(event.target.value)}
              sx={{ minWidth: 96 }}
              aria-label="Classe"
            >
              {classOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>

            {/* Masqué sous 900px, comme le logo. */}
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              startIcon={<RiShareLine size="1em" />}
              onClick={onShareAccess}
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              Partager les accès
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.sm}px` }}>
          {/* Feedback : bouton texte+icône à partir de 900px, icon button
              seul en dessous. */}
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<RiFeedbackLine size="1em" />}
            onClick={onFeedback}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            Feedback
          </Button>
          <LogbookIconButton
            color="primary"
            size="large"
            aria-label="Feedback"
            onClick={onFeedback}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <RiFeedbackLine size="1em" />
          </LogbookIconButton>

          <Badge badgeContent={notificationCount} color="primary">
            <LogbookIconButton
              color="primary"
              size="large"
              aria-label="Notifications"
              onClick={onNotifications}
            >
              <RiNotificationLine size="1em" />
            </LogbookIconButton>
          </Badge>

          {/* Profil : même bascule bouton texte+icône / icon button que
              Feedback sous 900px. */}
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<RiAccountCircleLine size="1em" />}
            onClick={onProfile}
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            {userName}
          </Button>
          <LogbookIconButton
            color="primary"
            size="large"
            aria-label={userName}
            onClick={onProfile}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <RiAccountCircleLine size="1em" />
          </LogbookIconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
