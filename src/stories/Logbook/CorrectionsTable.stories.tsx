import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
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
} from '../../icons';
import { LogbookIconButton } from '../../components/LogbookIconButton';
import { LogbookListenProgress } from '../../components/LogbookListenProgress';
import { PageLayout } from '../PageLayout';
import { designTokens } from '../../theme/generated/tokens';

import boy1 from '../../assets/avatars/Boy1.svg';
import girl1 from '../../assets/avatars/Girl1.svg';
import boy2 from '../../assets/avatars/Boy2.svg';
import girl2 from '../../assets/avatars/Girl2.svg';
import girl3 from '../../assets/avatars/Girl3.svg';

// Le switch "Non réalisée" porte l'état de remise du devoir : coché = rendu.
// Une fois rendu, quatre cas possibles pour la colonne État :
// - "toCorrect" : le prof n'a pas encore corrigé -> bouton "À corriger" (pas
//   un chip, c'est une action à faire). C'est l'état par défaut dès qu'on
//   active le switch.
// - "toAnalyze" : le prof a corrigé mais n'a pas encore lancé l'analyse de
//   sa correction -> bouton "À analyser" (même logique que "À corriger",
//   une action à faire, pas un statut).
// - "corrected" : corrigé et analysé, mais pas encore consulté par l'élève
//   -> chip "Rendue" (même tonalité verte que le statut "Rendue" utilisé
//   ailleurs dans le design system).
// - "consulted" : corrigé et consulté par l'élève -> chip "Consultée".
// Tant que le devoir n'est pas rendu ET corrigé+analysé, aucune Écoute,
// Note ni Réaction n'a de sens (rien à écouter/noter/réagir).
type RowState = 'notDone' | 'toCorrect' | 'toAnalyze' | 'corrected' | 'consulted';
type Reaction = 'content' | 'triste' | 'très triste';

// Largeur fixe pour tous les chips/boutons de la colonne État, calée sur le
// plus long des contenus ("À analyser" + icône, ~114px mesuré) + une marge.
const etatWidth = '128px';

// Sous 900px (breakpoint md), on ne garde que Élève/Non réalisée/État/Note —
// Écoute, Réaction et le menu disparaissent ; la Note (qui a sa propre
// colonne au-dessus de md) passe alors sous le chip/bouton d'État.
const hideOnNarrow = { display: { xs: 'none', md: 'table-cell' } } as const;

const reactionIcons: Record<Reaction, { Icon: typeof RiEmotionLaughLine; color: string }> = {
  content: { Icon: RiEmotionLaughLine, color: designTokens.color.success.dark },
  triste: { Icon: RiEmotionSadLine, color: designTokens.color.warning.contrastText },
  'très triste': { Icon: RiEmotionUnhappyLine, color: designTokens.color.error.dark },
};

interface RowData {
  student: string;
  loginCode: string;
  avatar: string;
  state: RowState;
  listened: number | null;
  note: number | null;
  reaction: Reaction | null;
  hasComment: boolean;
}

const initialRows: RowData[] = [
  {
    student: 'Camille Dupont',
    loginCode: 'HBTRQJ',
    avatar: boy1,
    state: 'consulted',
    listened: 85,
    note: 16,
    reaction: 'content',
    hasComment: true,
  },
  {
    student: 'Lucas Martin',
    loginCode: 'GF3CBF',
    avatar: girl1,
    state: 'notDone',
    listened: null,
    note: null,
    reaction: null,
    hasComment: false,
  },
  {
    student: 'Sofia Ben Ali',
    loginCode: 'PQ8BN2',
    avatar: boy2,
    state: 'toCorrect',
    listened: null,
    note: null,
    reaction: null,
    hasComment: false,
  },
  {
    student: 'Amir Haddad',
    loginCode: 'Q4TAL3',
    avatar: boy1,
    state: 'toAnalyze',
    listened: null,
    note: null,
    reaction: null,
    hasComment: false,
  },
  {
    student: 'Nora Lefèvre',
    loginCode: 'XTKPXG',
    avatar: girl2,
    state: 'corrected',
    listened: null,
    note: null,
    reaction: null,
    hasComment: false,
  },
  {
    student: 'Inès Girard',
    loginCode: 'F0GYYS',
    avatar: girl3,
    state: 'consulted',
    listened: 120,
    note: 18,
    reaction: 'très triste',
    hasComment: true,
  },
];

function CorrectionsRow({ row: initialRow }: { row: RowData }) {
  const [row, setRow] = useState(initialRow);
  const reaction = row.reaction ? reactionIcons[row.reaction] : null;

  return (
    <TableRow hover>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.xs}px` }}>
          <Avatar src={row.avatar} alt={row.student} sx={{ width: 40, height: 40 }} />
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
          onChange={(event) =>
            setRow((prev) => ({ ...prev, state: event.target.checked ? 'toCorrect' : 'notDone' }))
          }
          slotProps={{ input: { 'aria-label': `Devoir rendu — ${row.student}` } }}
        />
      </TableCell>
      <TableCell>
        {row.state === 'notDone' && <Chip label="Non réalisée" color="secondary" variant="subtle" sx={{ width: etatWidth }} />}
        {row.state === 'toCorrect' && (
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<RiBallPenLine size="1em" />}
            sx={{ width: etatWidth }}
          >
            À corriger
          </Button>
        )}
        {row.state === 'toAnalyze' && (
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<RiBardLine size="1em" />}
            sx={{ width: etatWidth }}
          >
            À analyser
          </Button>
        )}
        {row.state === 'corrected' && (
          <Chip label="Rendue" color="success" variant="subtle" sx={{ width: etatWidth }} />
        )}
        {row.state === 'consulted' && (
          <Chip label="Consultée" color="info" variant="subtle" sx={{ width: etatWidth }} />
        )}
        {/* Sous 900px, la Note (qui perd sa propre colonne) s'affiche ici,
            sous le chip/bouton d'État — rien du tout si pas de note. */}
        {row.state === 'consulted' && row.note !== null && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: { xs: 'block', md: 'none' }, mt: 0.5 }}
          >
            {row.note}/20
          </Typography>
        )}
      </TableCell>
      <TableCell sx={hideOnNarrow}>
        {row.state === 'consulted' && row.listened !== null && <LogbookListenProgress value={row.listened} />}
      </TableCell>
      <TableCell sx={hideOnNarrow}>
        {row.state === 'consulted' && row.note !== null && (
          <Typography variant="body2" color="text.secondary">
            {row.note}/20
          </Typography>
        )}
      </TableCell>
      <TableCell sx={hideOnNarrow}>
        {row.state === 'consulted' && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.xs}px` }}>
            {reaction && <reaction.Icon size={20} color={reaction.color} />}
            {row.hasComment && <RiChat3Line size={18} color={designTokens.color.text.secondary} />}
          </Box>
        )}
      </TableCell>
      <TableCell sx={hideOnNarrow}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: `${designTokens.spacing.xs}px` }}>
          <LogbookIconButton variant="outlined" color="secondary" aria-label="Actions" size="small">
            <RiMoreFill size="1em" />
          </LogbookIconButton>
          <RiArrowRightSLine size={20} color={designTokens.color.primary.main} />
        </Box>
      </TableCell>
    </TableRow>
  );
}

function CorrectionsTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Élève</TableCell>
          <TableCell>Non réalisée</TableCell>
          <TableCell>État</TableCell>
          <TableCell sx={hideOnNarrow}>Écoute</TableCell>
          <TableCell sx={hideOnNarrow}>Note</TableCell>
          <TableCell sx={hideOnNarrow}>Réaction</TableCell>
          <TableCell sx={hideOnNarrow} />
        </TableRow>
      </TableHead>
      <TableBody>
        {initialRows.map((row) => (
          <CorrectionsRow key={row.student} row={row} />
        ))}
      </TableBody>
    </Table>
  );
}

const meta: Meta<typeof CorrectionsTable> = {
  title: 'Logbook/CorrectionsTable',
  component: CorrectionsTable,
  decorators: [(Story) => (<PageLayout title="CorrectionsTable"><Story /></PageLayout>)],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof CorrectionsTable>;

export const Default: Story = {};
