import { Box, Typography } from '@mui/material';
import { RiHeadphoneLine } from '../icons';
import { designTokens } from '../theme/generated/tokens';

const { color } = designTokens;

// Silhouette de barres façon égaliseur (hauteurs fixes en px), plutôt qu'une
// LinearProgress classique — assemblage propre à Logbook, cf. la story
// Foundations qui a inspiré ce composant.
const barHeights = [8, 12, 17, 20, 15, 20, 11, 18, 9, 14, 8, 11];

export interface LogbookListenProgressProps {
  /** Pourcentage écouté, peut dépasser 100 (relecture d'une partie de l'audio). */
  value: number;
}

export function LogbookListenProgress({ value }: LogbookListenProgressProps) {
  const barsCount = barHeights.length;
  const listened = Math.max(0, value);
  const filledBars = Math.min(barsCount, Math.round((Math.min(listened, 100) / 100) * barsCount));
  const overflowBars =
    listened > 100 ? Math.min(barsCount, Math.round(((listened - 100) / 100) * barsCount)) : 0;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <RiHeadphoneLine
        size={20}
        color={listened > 0 ? color.primary.main : color.secondary.main}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', height: 20 }}>
        {barHeights.map((height, i) => {
          let barColor: string = color.secondary.main;
          if (i < filledBars) barColor = color.primary.main;
          if (overflowBars > 0 && i >= barsCount - overflowBars) barColor = color.primary.dark;
          // À 0% écouté, les barres sont toutes plates (4px) au lieu de la
          // silhouette en vague, qui n'a de sens qu'une fois qu'il y a une
          // progression à afficher.
          const barHeight = listened === 0 ? 4 : height;
          return (
            <Box
              key={i}
              sx={{
                width: '3px',
                height: `${barHeight}px`,
                borderRadius: '2px',
                backgroundColor: barColor,
              }}
            />
          );
        })}
      </Box>
      <Typography variant="body2" color="textSecondary">
        {Math.round(listened)}%
      </Typography>
    </Box>
  );
}
