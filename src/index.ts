// Point d'entrée public du design system Logbook, consommé par les projets
// clients (ex: logbook-dashboard) via `npm install git+...logbookUI...`.
// Toute nouvelle brique destinée à être consommée en dehors de ce repo doit
// être réexportée ici plutôt que via un chemin d'import profond.

export { LogbookThemeProvider } from './theme/LogbookThemeProvider';
export { logbookTheme } from './theme';

export {
  LogbookStatCard,
  type LogbookStatCardProps,
} from './components/LogbookStatCard';
export {
  LogbookIconButton,
  type LogbookIconButtonProps,
  type LogbookIconButtonVariant,
} from './components/LogbookIconButton';
export {
  LogbookNavbar,
  type LogbookNavbarProps,
  type LogbookNavbarClassOption,
} from './components/LogbookNavbar';
export {
  LogbookListenProgress,
  type LogbookListenProgressProps,
} from './components/LogbookListenProgress';

export * from './icons';
