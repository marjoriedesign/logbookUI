import { Box, Button, Card, Fab, LinearProgress, Typography } from '@mui/material';
import { RiAiGenerateText, RiForward30Line, RiPauseLine, RiPlayFill, RiReplay30Line } from '../icons';
import { designTokens } from '../theme/generated/tokens';
import { LogbookIconButton } from './LogbookIconButton';

export interface LogbookVoicePlayerProps {
  isPlaying: boolean;
  /** Position de lecture en secondes. */
  currentSeconds: number;
  durationSeconds: number;
  /** Multiplicateur de vitesse affiché (ex. 1 -> "x1.00"). */
  playbackRate?: number;
  onPlayPause?: () => void;
  onSkipBack?: () => void;
  onSkipForward?: () => void;
  onPlaybackRateClick?: () => void;
  onTranscriptClick?: () => void;
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function LogbookVoicePlayer({
  isPlaying,
  currentSeconds,
  durationSeconds,
  playbackRate = 1,
  onPlayPause,
  onSkipBack,
  onSkipForward,
  onPlaybackRateClick,
  onTranscriptClick,
}: LogbookVoicePlayerProps) {
  const progress = durationSeconds > 0 ? Math.min(100, (currentSeconds / durationSeconds) * 100) : 0;

  return (
    // Fond/bordure beige : hérités du défaut de <Card> (palette.background.paper
    // = paper-elevation-1, cf. MuiCard dans theme/components/Card.ts), pas de
    // styleOverrides supplémentaire nécessaire ici.
    <Card sx={{ width: { xs: '100%', sm: 448 }, boxSizing: 'border-box', p: 2 }}>
      <Typography variant="subtitle2" color="text.secondary">
        {formatTime(currentSeconds)} / {formatTime(durationSeconds)}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={progress}
        aria-label="Progression de l'écoute"
        sx={{ mt: 1 }}
      />

      <Box
        sx={{
          mt: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: `${designTokens.borderRadius.lg}px`,
          p: 1.5,
        }}
      >
        <Button variant="outlined" color="secondary" size="small" onClick={onPlaybackRateClick}>
          x{playbackRate.toFixed(2)}
        </Button>

        <LogbookIconButton color="primary" aria-label="Reculer de 30 secondes" onClick={onSkipBack}>
          <RiReplay30Line size={22} />
        </LogbookIconButton>

        {/* 64x64 : même gabarit que le bouton micro de LogbookVoiceRecorder. */}
        <Fab
          color="primary"
          onClick={onPlayPause}
          aria-label={isPlaying ? 'Mettre en pause' : 'Lire'}
          sx={{ width: 64, height: 64, aspectRatio: '1 / 1', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
        >
          {isPlaying ? <RiPauseLine size={28} /> : <RiPlayFill size={28} />}
        </Fab>

        <LogbookIconButton color="primary" aria-label="Avancer de 30 secondes" onClick={onSkipForward}>
          <RiForward30Line size={22} />
        </LogbookIconButton>

        <LogbookIconButton color="primary" aria-label="Afficher la transcription" onClick={onTranscriptClick}>
          <RiAiGenerateText size={22} />
        </LogbookIconButton>
      </Box>
    </Card>
  );
}
