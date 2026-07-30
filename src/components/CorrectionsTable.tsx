import { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Switch,
  Chip,
  Button,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  RiEmotionLaughLine,
  RiEmotionSadLine,
  RiEmotionUnhappyLine,
  RiChat3Line,
  RiMoreFill,
  RiArrowRightSLine,
  RiBallPenLine,
  RiBardLine,
  RiArrowDownLine,
} from '../icons';
import { LogbookIconButton } from './LogbookIconButton';
import { LogbookListenProgress } from './LogbookListenProgress';
import { designTokens } from '../theme/generated/tokens';

// Extrait de src/stories/Logbook/CorrectionsTable.stories.tsx (qui ne
// contenait jusqu'ici que la démo, jamais un composant exporté) — voir cette
// story pour un exemple d'intégration complet avec état contrôlé.

// Le switch "Non réalisée" porte l'état de remise du devoir : coché = rendu.
// Une fois rendu, quatre cas possibles pour la colonne État — uniquement des
// chips (pas de bouton) : la ligne entière est cliquable dans l'app
// consommatrice, un bouton imbriqué dans cet élément cliquable poserait un
// problème d'imbrication de contrôles interactifs. Les chips "À
// corriger"/"À analyser" restent donc en `color="primary"` (même teinte que
// les anciens boutons contained) mais purement présentationnelles : c'est le
// clic sur la ligne (pas la chip) qui doit déclencher l'action côté app
// consommatrice.
// - "toCorrect" : le prof n'a pas encore corrigé -> chip "À corriger". C'est
//   l'état par défaut dès qu'on active le switch.
// - "toAnalyze" : le prof a corrigé mais n'a pas encore lancé l'analyse de
//   sa correction -> chip "À analyser" (même logique que "À corriger").
// - "corrected" : corrigé et analysé, mais pas encore consulté par l'élève
//   -> chip "Rendue" (même tonalité verte que le statut "Rendue" utilisé
//   ailleurs dans le design system).
// - "consulted" : corrigé et consulté par l'élève -> chip "Consultée".
// Tant que le devoir n'est pas rendu ET corrigé+analysé, aucune Écoute,
// Note ni Réaction n'a de sens (rien à écouter/noter/réagir).
export type CorrectionState = 'notDone' | 'toCorrect' | 'toAnalyze' | 'corrected' | 'consulted';
export type CorrectionReaction = 'content' | 'triste' | 'très triste';

export interface CorrectionsTableRow {
  id: string;
  student: string;
  loginCode: string;
  avatarSrc: string;
  avatarAlt?: string;
  state: CorrectionState;
  listened: number | null;
  note: number | null;
  reaction: CorrectionReaction | null;
  hasComment: boolean;
}

export interface CorrectionsTableProps {
  rows: CorrectionsTableRow[];
  /** Coche/décoche "Non réalisée" — le composant ne gère pas l'état de remise lui-même. */
  onToggleSubmitted?: (row: CorrectionsTableRow, submitted: boolean) => void;
  /** Clic n'importe où sur la ligne (hors Switch et "..." Actions) : ouvre le side panel de l'élève. */
  onOpenStudent?: (row: CorrectionsTableRow) => void;
  /** Clic sur le "..." : menu d'actions annexes (à définir par l'app consommatrice). */
  onOpenActions?: (row: CorrectionsTableRow) => void;
}

// Largeur fixe pour tous les chips/boutons de la colonne État, calée sur le
// plus long des contenus ("À analyser" + icône, ~114px mesuré) + une marge.
const etatWidth = '128px';

const reactionIcons: Record<CorrectionReaction, { Icon: typeof RiEmotionLaughLine; color: string }> = {
  content: { Icon: RiEmotionLaughLine, color: designTokens.color.success.dark },
  triste: { Icon: RiEmotionSadLine, color: designTokens.color.warning.contrastText },
  'très triste': { Icon: RiEmotionUnhappyLine, color: designTokens.color.error.dark },
};

interface CorrectionsRowProps {
  row: CorrectionsTableRow;
  isNarrow: boolean;
  onToggleSubmitted?: CorrectionsTableProps['onToggleSubmitted'];
  onOpenStudent?: CorrectionsTableProps['onOpenStudent'];
  onOpenActions?: CorrectionsTableProps['onOpenActions'];
}

function CorrectionsRow({
  row,
  isNarrow,
  onToggleSubmitted,
  onOpenStudent,
  onOpenActions,
}: CorrectionsRowProps) {
  const reaction = row.reaction ? reactionIcons[row.reaction] : null;

  return (
    <TableRow
      hover
      onClick={() => onOpenStudent?.(row)}
      sx={{ cursor: onOpenStudent ? 'pointer' : undefined }}
    >
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.xs}px` }}>
          <Avatar src={row.avatarSrc} alt={row.avatarAlt ?? ''} sx={{ width: 40, height: 40 }} />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: designTokens.fontWeights.bold }}>
              {row.student}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {row.loginCode}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell>
        <Switch
          checked={row.state !== 'notDone'}
          onChange={(event) => onToggleSubmitted?.(row, event.target.checked)}
          onClick={(event) => event.stopPropagation()}
          slotProps={{ input: { 'aria-label': `Devoir rendu — ${row.student}` } }}
        />
      </TableCell>
      <TableCell>
        {row.state === 'notDone' && <Chip label="Non réalisée" color="secondary" variant="subtle" sx={{ width: etatWidth }} />}
        {row.state === 'toCorrect' && (
          <Chip
            label="À corriger"
            color="primary"
            variant="filled"
            icon={<RiBallPenLine size={16} />}
            sx={{ width: etatWidth }}
          />
        )}
        {row.state === 'toAnalyze' && (
          <Chip
            label="À analyser"
            color="primary"
            variant="filled"
            icon={<RiBardLine size={16} />}
            sx={{ width: etatWidth }}
          />
        )}
        {row.state === 'corrected' && (
          <Chip label="Rendue" color="success" variant="subtle" sx={{ width: etatWidth }} />
        )}
        {row.state === 'consulted' && (
          <Chip label="Consultée" color="info" variant="subtle" sx={{ width: etatWidth }} />
        )}
        {/* Sous 900px, la Note (qui perd sa propre colonne) s'affiche ici,
            sous le chip/bouton d'État — rien du tout si pas de note. */}
        {isNarrow && row.state === 'consulted' && row.note !== null && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {row.note}/20
          </Typography>
        )}
      </TableCell>
      {!isNarrow && (
        <TableCell>
          {row.state === 'consulted' && row.listened !== null && <LogbookListenProgress value={row.listened} />}
        </TableCell>
      )}
      {!isNarrow && (
        <TableCell>
          {row.state === 'consulted' && row.note !== null && (
            <Typography variant="body2" color="text.secondary">
              {row.note}/20
            </Typography>
          )}
        </TableCell>
      )}
      {!isNarrow && (
        <TableCell>
          {row.state === 'consulted' && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.xs}px` }}>
              {reaction && <reaction.Icon size={20} color={reaction.color} />}
              {row.hasComment && <RiChat3Line size={18} color={designTokens.color.text.secondary} />}
            </Box>
          )}
        </TableCell>
      )}
      {!isNarrow && (
        <TableCell>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.xs}px` }}>
            <LogbookIconButton
              color="primary"
              aria-label="Actions"
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                onOpenActions?.(row);
              }}
            >
              <RiMoreFill size="1em" />
            </LogbookIconButton>
            {/* Pas de onClick ici : le clic remonte au TableRow, qui porte
                déjà onOpenStudent — cette flèche n'est qu'une affordance
                visuelle. */}
            <RiArrowRightSLine size={20} color={designTokens.color.primary.main} />
          </Box>
        </TableCell>
      )}
    </TableRow>
  );
}

// Le tri par nom est un état purement présentationnel (ordre d'affichage),
// géré en interne — contrairement aux données des lignes (remise,
// correction, réaction...) qui restent contrôlées par l'app consommatrice.
export function CorrectionsTable({
  rows,
  onToggleSubmitted,
  onOpenStudent,
  onOpenActions,
}: CorrectionsTableProps) {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const theme = useTheme();
  const isNarrow = useMediaQuery(theme.breakpoints.down('md'));

  const sortedRows = [...rows].sort((a, b) =>
    order === 'asc' ? a.student.localeCompare(b.student) : b.student.localeCompare(a.student),
  );

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sortDirection={order}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              endIcon={
                <RiArrowDownLine
                  style={{
                    transform: order === 'asc' ? 'rotate(180deg)' : 'none',
                    transition: theme.transitions.create('transform', {
                      duration: theme.transitions.duration.shorter,
                    }),
                  }}
                />
              }
              onClick={() => setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
            >
              Élève
            </Button>
          </TableCell>
          <TableCell>Non réalisée</TableCell>
          <TableCell>État</TableCell>
          {!isNarrow && <TableCell>Écoute</TableCell>}
          {!isNarrow && <TableCell>Note</TableCell>}
          {!isNarrow && <TableCell>Réaction</TableCell>}
          {!isNarrow && <TableCell />}
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedRows.map((row) => (
          <CorrectionsRow
            key={row.id}
            row={row}
            isNarrow={isNarrow}
            onToggleSubmitted={onToggleSubmitted}
            onOpenStudent={onOpenStudent}
            onOpenActions={onOpenActions}
          />
        ))}
      </TableBody>
    </Table>
  );
}
