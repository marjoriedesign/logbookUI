import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, TableHead, TableBody, TableRow, TableCell, Stack, Typography } from '@mui/material';
import { RiCheckboxCircleLine, RiErrorWarningLine } from '../../icons';
import { PageLayout } from '../PageLayout';

const rows = [
  { student: 'Camille Dupont', type: 'Orale', status: 'Corrigée' as const },
  { student: 'Lucas Martin', type: 'Écrite', status: 'En attente' as const },
  { student: 'Sofia Ben Ali', type: 'Orale', status: 'Corrigée' as const },
];

function CorrectionsTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Élève</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Statut</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.student}>
            <TableCell>{row.student}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                {row.status === 'Corrigée' ? (
                  <RiCheckboxCircleLine size={16} />
                ) : (
                  <RiErrorWarningLine size={16} />
                )}
                <Typography variant="body2">{row.status}</Typography>
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const TOKENS = [
  { token: 'theme.palette.divider', note: 'bordure des cellules, reprise sans l’éclaircissement natif de MUI (qui l’éclaircit de 88%, rendant le beige quasi invisible)' },
  { token: 'theme.palette.background.paper', note: 'fond du header (= color.grey.50, #fdfaf3)' },
  { token: 'designTokens.borderRadius.md', note: 'coins arrondis du header, sur les cellules extérieures uniquement (first/last-of-type)' },
];

const NOTES = [
  'borderCollapse passé à "separate" (au lieu du "collapse" natif) : un border-radius sur une cellule de table n’a aucun effet visuel en collapse — comportement CSS standard, indépendant de MUI.',
  'Voir aussi Logbook/CorrectionsTable pour la version complète (tri, switch, chips/boutons d’état, responsive) — cette page-ci n’en montre qu’un sous-ensemble simplifié.',
];

const meta: Meta<typeof CorrectionsTable> = {
  title: 'Components/Table',
  component: CorrectionsTable,
  decorators: [(Story) => (<PageLayout title="Table" tokens={TOKENS} notes={NOTES}><Story /></PageLayout>)],
  parameters: { layout: 'padded', controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof CorrectionsTable>;

export const Default: Story = {};
