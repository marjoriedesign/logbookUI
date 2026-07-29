import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CorrectionsTable, type CorrectionsTableRow } from '../../components/CorrectionsTable';
import { PageLayout } from '../PageLayout';

import boy1 from '../../assets/avatars/Boy1.svg';
import girl1 from '../../assets/avatars/Girl1.svg';
import boy2 from '../../assets/avatars/Boy2.svg';
import girl2 from '../../assets/avatars/Girl2.svg';
import girl3 from '../../assets/avatars/Girl3.svg';

const initialRows: CorrectionsTableRow[] = [
  {
    id: '1',
    student: 'Camille Dupont',
    loginCode: 'HBTRQJ',
    avatarSrc: boy1,
    avatarAlt: 'Camille Dupont',
    state: 'consulted',
    listened: 85,
    note: 16,
    reaction: 'content',
    hasComment: true,
  },
  {
    id: '2',
    student: 'Lucas Martin',
    loginCode: 'GF3CBF',
    avatarSrc: girl1,
    avatarAlt: 'Lucas Martin',
    state: 'notDone',
    listened: null,
    note: null,
    reaction: null,
    hasComment: false,
  },
  {
    id: '3',
    student: 'Sofia Ben Ali',
    loginCode: 'PQ8BN2',
    avatarSrc: boy2,
    avatarAlt: 'Sofia Ben Ali',
    state: 'toCorrect',
    listened: null,
    note: null,
    reaction: null,
    hasComment: false,
  },
  {
    id: '4',
    student: 'Amir Haddad',
    loginCode: 'Q4TAL3',
    avatarSrc: boy1,
    avatarAlt: 'Amir Haddad',
    state: 'toAnalyze',
    listened: null,
    note: null,
    reaction: null,
    hasComment: false,
  },
  {
    id: '5',
    student: 'Nora Lefèvre',
    loginCode: 'XTKPXG',
    avatarSrc: girl2,
    avatarAlt: 'Nora Lefèvre',
    state: 'corrected',
    listened: null,
    note: null,
    reaction: null,
    hasComment: false,
  },
  {
    id: '6',
    student: 'Inès Girard',
    loginCode: 'F0GYYS',
    avatarSrc: girl3,
    avatarAlt: 'Inès Girard',
    state: 'consulted',
    listened: 120,
    note: 18,
    reaction: 'très triste',
    hasComment: true,
  },
];

// Story-only : porte l'état local pour démontrer l'interaction du Switch.
// Une vraie app branche ce callback sur son propre state/API plutôt que de
// le court-circuiter comme ici.
function CorrectionsTableDemo() {
  const [rows, setRows] = useState(initialRows);

  return (
    <CorrectionsTable
      rows={rows}
      onToggleSubmitted={(row, submitted) =>
        setRows((prev) =>
          prev.map((r) => (r.id === row.id ? { ...r, state: submitted ? 'toCorrect' : 'notDone' } : r)),
        )
      }
    />
  );
}

const meta: Meta<typeof CorrectionsTableDemo> = {
  title: 'Logbook/CorrectionsTable',
  component: CorrectionsTableDemo,
  decorators: [(Story) => (<PageLayout title="CorrectionsTable"><Story /></PageLayout>)],
  parameters: { layout: 'padded', controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof CorrectionsTableDemo>;

export const Default: Story = {};
