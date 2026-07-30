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
export {
  CorrectionsTable,
  type CorrectionsTableProps,
  type CorrectionsTableRow,
  type CorrectionState,
  type CorrectionReaction,
} from './components/CorrectionsTable';
export {
  LogbookSidePanelHeader,
  type LogbookSidePanelHeaderProps,
} from './components/LogbookSidePanelHeader';
export {
  LogbookVoiceRecorder,
  type LogbookVoiceRecorderProps,
  type LogbookVoiceRecorderStatus,
} from './components/LogbookVoiceRecorder';
export {
  LogbookVoicePlayer,
  type LogbookVoicePlayerProps,
} from './components/LogbookVoicePlayer';
export {
  LogbookSidePanelFooter,
  type LogbookSidePanelFooterProps,
  type LogbookSidePanelFooterAction,
} from './components/LogbookSidePanelFooter';

export * from './icons';
