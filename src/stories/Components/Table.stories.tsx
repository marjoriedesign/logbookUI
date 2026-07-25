import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, TableHead, TableBody, TableRow, TableCell, Stack, Typography } from '@mui/material';
import { RiCheckboxCircleFill, RiErrorWarningLine } from '../../icons';
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
                  <RiCheckboxCircleFill size={16} />
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

const meta: Meta<typeof CorrectionsTable> = {
  title: 'Components/Table',
  component: CorrectionsTable,
  decorators: [(Story) => (<PageLayout title="Table"><Story /></PageLayout>)],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof CorrectionsTable>;

export const Default: Story = {};
