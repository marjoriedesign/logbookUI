import { useMemo } from 'react';
import { Box, Card, Fab, Typography } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import { RiMicLine, RiPauseLine } from '../icons';
import { designTokens } from '../theme/generated/tokens';

// D'autres états (pause reprise, etc.) viendront ensuite — seuls "idle" et
// "recording" sont couverts pour l'instant.
export type LogbookVoiceRecorderStatus = 'idle' | 'recording';

export interface LogbookVoiceRecorderProps {
  status: LogbookVoiceRecorderStatus;
  /** Secondes écoulées depuis le début de l'enregistrement, affichées en 0:00. Ignoré à l'état "idle". */
  elapsedSeconds?: number;
  onToggle?: () => void;
}

function formatElapsed(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

const waveBarCount = 20;

const wave = keyframes`
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1); }
`;

// Silhouette d'onde décorative pendant l'enregistrement — pas un vrai
// analyseur audio, juste une animation continue (cf. LogbookListenProgress
// pour l'équivalent statique/pourcentage une fois l'écoute terminée).
function RecordingWave() {
  const bars = useMemo(
    () =>
      Array.from({ length: waveBarCount }, (_, i) => ({
        delay: (i % 7) * 0.09,
        duration: 0.6 + (i % 5) * 0.08,
      })),
    [],
  );

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 120, height: 16 }}>
      {bars.map((bar, i) => (
        <Box
          key={i}
          sx={{
            width: '2px',
            height: '100%',
            borderRadius: '1px',
            backgroundColor: designTokens.color.primary.dark,
            animation: `${wave} ${bar.duration}s ease-in-out ${bar.delay}s infinite`,
          }}
        />
      ))}
    </Box>
  );
}

export function LogbookVoiceRecorder({ status, elapsedSeconds = 0, onToggle }: LogbookVoiceRecorderProps) {
  const isRecording = status === 'recording';

  return (
    <Card
      sx={{
        width: 448,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingBlock: 2,
      }}
    >
      {/* Survol : MUI bascule nativement le fond vers primary.dark, qui vaut
          #4ad09a (un vert) — incohérence connue du nuancier, déjà présente
          et documentée sur Button/LogbookIconButton, reproduite à
          l'identique ici plutôt que corrigée en douce. */}
      <Fab
        color="primary"
        onClick={onToggle}
        aria-label={isRecording ? 'Mettre en pause' : 'Commencer à parler'}
        sx={{ width: 64, height: 64, aspectRatio: '1 / 1', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
      >
        {isRecording ? <RiPauseLine size={28} /> : <RiMicLine size={28} />}
      </Fab>

      <Typography variant="h5" color="text.primary" sx={{ mt: 2 }}>
        {isRecording ? 'À vous les studios !' : 'Commencer à parler'}
      </Typography>

      {isRecording && (
        <>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
            Appuyez sur espace pour pause/reprise
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
            {formatElapsed(elapsedSeconds)}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <RecordingWave />
          </Box>
        </>
      )}
    </Card>
  );
}
