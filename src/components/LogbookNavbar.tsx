import { AppBar, Toolbar, Box, Button, ButtonBase, Select, MenuItem, Badge } from '@mui/material';
import type { SelectChangeEvent, Theme } from '@mui/material';
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

// Seuil de bascule mobile/desktop propre à la navbar (ni md/900px ni
// lg/1200px du DS) : calé au plus près du besoin réel du contenu desktop
// complet (logo + select + "Partager les accès" + "Feedback" + cloche +
// profil), mesuré à ~925px (Playwright, somme des largeurs naturelles des
// deux groupes + padding du Toolbar à 40px) + une marge de sécurité
// modeste (~15px, variations de rendu de police entre navigateurs/OS).
// md (900px) faisait passer "Partager les accès" sur 2 lignes faute de
// place ; lg (1200px), essayé ensuite, laissait un entre-deux large où la
// navbar restait en mode compact alors qu'elle avait déjà la place —
// signalé par Marjorie. theme.breakpoints.up/down() avec un nombre brut
// reste l'API de breakpoints MUI (pas une media query écrite à la main),
// seul moyen d'obtenir ce point de rupture précis, propre à ce composant
// (pas une redéfinition globale de md/lg, qui affecterait tout le thème).
const NAVBAR_DESKTOP_BREAKPOINT = 940;
const showAboveNavbarBreakpoint = (theme: Theme) => ({
  display: 'none',
  [theme.breakpoints.up(NAVBAR_DESKTOP_BREAKPOINT)]: { display: 'inline-flex' },
});
const hideAboveNavbarBreakpoint = (theme: Theme) => ({
  display: 'inline-flex',
  [theme.breakpoints.up(NAVBAR_DESKTOP_BREAKPOINT)]: { display: 'none' },
});

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
          {/* Logo : masqué sous NAVBAR_DESKTOP_BREAKPOINT pour laisser la
              place au reste de la navbar sur petit écran. ButtonBase (pas
              un Box img nu) pour l'accessibilité clavier native du clic
              (retour à l'accueil). */}
          <ButtonBase
            onClick={onLogoClick}
            aria-label="Accueil"
            sx={(theme) => ({
              ...showAboveNavbarBreakpoint(theme),
              borderRadius: designTokens.borderRadius.sm,
            })}
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

            {/* Bouton texte à partir de NAVBAR_DESKTOP_BREAKPOINT (reste à
                côté du Select ici) ; sa version icon button, elle, est
                regroupée avec les autres icon buttons à droite en
                dessous du seuil (cf. Box de droite) — demandé par
                Marjorie : tous les icon buttons de la navbar mobile
                (hors Select) alignés ensemble à droite. */}
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              startIcon={<RiShareLine size="1em" />}
              onClick={onShareAccess}
              sx={showAboveNavbarBreakpoint}
            >
              Partager les accès
            </Button>
          </Box>
        </Box>

        <Box
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            gap: `${designTokens.spacing.xs}px`,
            [theme.breakpoints.up(NAVBAR_DESKTOP_BREAKPOINT)]: {
              gap: `${designTokens.spacing.sm}px`,
            },
          })}
        >
          {/* Partager les accès : icon button seul sous
              NAVBAR_DESKTOP_BREAKPOINT (sa version texte, à côté du
              Select, est dans le groupe de gauche ci-dessus). */}
          <LogbookIconButton
            color="primary"
            size="large"
            aria-label="Partager les accès"
            onClick={onShareAccess}
            sx={hideAboveNavbarBreakpoint}
          >
            <RiShareLine size="1em" />
          </LogbookIconButton>

          {/* Feedback : bouton texte+icône à partir de NAVBAR_DESKTOP_BREAKPOINT,
              icon button seul en dessous. */}
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<RiFeedbackLine size="1em" />}
            onClick={onFeedback}
            sx={showAboveNavbarBreakpoint}
          >
            Feedback
          </Button>
          <LogbookIconButton
            color="primary"
            size="large"
            aria-label="Feedback"
            onClick={onFeedback}
            sx={hideAboveNavbarBreakpoint}
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
              Feedback sous NAVBAR_DESKTOP_BREAKPOINT. */}
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<RiAccountCircleLine size="1em" />}
            onClick={onProfile}
            sx={showAboveNavbarBreakpoint}
          >
            {userName}
          </Button>
          <LogbookIconButton
            color="primary"
            size="large"
            aria-label={userName}
            onClick={onProfile}
            sx={hideAboveNavbarBreakpoint}
          >
            <RiAccountCircleLine size="1em" />
          </LogbookIconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
