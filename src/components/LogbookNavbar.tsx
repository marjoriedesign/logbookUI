import { AppBar, Toolbar, Box, Button, ButtonBase, Select, MenuItem, Badge } from '@mui/material';
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
  /** Chaîne vide = aucune classe sélectionnée (ex. page d'accueil) : affiche `classPlaceholder`. */
  selectedClass: string;
  onClassChange: (value: string) => void;
  /** Affiché quand `selectedClass` est vide. */
  classPlaceholder?: string;
  userName: string;
  notificationCount?: number;
  /** Clic sur le logo (ex. retour à l'accueil). */
  onLogoClick?: () => void;
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
  classPlaceholder = 'Classe',
  userName,
  notificationCount = 0,
  onLogoClick,
  onShareAccess,
  onFeedback,
  onNotifications,
  onProfile,
}: LogbookNavbarProps) {
  return (
    <AppBar position="sticky">
      {/* Padding géré par le thème (MuiToolbar, cf. theme/components/Toolbar.ts) */}
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.lg}px` }}>
          {/* Logo : masqué sous 900px (breakpoint md) pour laisser la place
              au reste de la navbar sur petit écran. ButtonBase (pas un
              Box img nu) pour l'accessibilité clavier native du clic
              (retour à l'accueil). */}
          <ButtonBase
            onClick={onLogoClick}
            aria-label="Accueil"
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              borderRadius: designTokens.borderRadius.sm,
            }}
          >
            <Box component="img" src={logoGreen} alt="" sx={{ height: 32, display: 'block' }} />
          </ButtonBase>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.sm}px` }}>
            <Select
              size="small"
              value={selectedClass}
              onChange={(event: SelectChangeEvent) => onClassChange(event.target.value)}
              displayEmpty
              renderValue={(value) =>
                value ? (classOptions.find((option) => option.value === value)?.label ?? value) : classPlaceholder
              }
              // Hauteur alignée sur les IconButton size="large" de la navbar
              // (46px + 2×1px de bordure = 48px, cf. IconButton.ts) : même
              // cran que designTokens.spacing['6']. Scopé à cette instance
              // (pas au thème MuiSelect) car c'est un alignement avec ses
              // voisins dans cette composition précise, pas une règle
              // générale pour tout Select size="small" du DS.
              sx={{ minWidth: 96, height: designTokens.spacing['6'] }}
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
