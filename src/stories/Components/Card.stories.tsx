import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, Stack, Typography, Chip, IconButton } from '@mui/material';
import { RiMicLine, RiPlayCircleLine } from '../../icons';
import { PageLayout } from '../PageLayout';

function AudioFeedbackCard() {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent>
        <Stack spacing={1.5}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <RiMicLine size={18} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Correction orale
              </Typography>
            </Stack>
            <Chip label="Analysée par IA" size="small" color="secondary" />
          </Stack>
          <Typography variant="body2" color="textSecondary">
            « Bonne structure argumentative, attention à la conjugaison au
            subjonctif dans le second paragraphe. »
          </Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <IconButton size="small" color="primary" aria-label="Écouter la correction audio">
              <RiPlayCircleLine size="1em" />
            </IconButton>
            <Typography variant="body2" color="textSecondary">
              1 min 24
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

const NOTES = [
  'defaultProps : elevation=0 + variant="outlined", boxShadow forcé à \'none\' dans le styleOverrides (aucune ombre portée, y compris si un appelant passe une autre elevation).',
];

const meta: Meta<typeof AudioFeedbackCard> = {
  title: 'Components/Card',
  component: AudioFeedbackCard,
  decorators: [(Story) => (<PageLayout title="Card" notes={NOTES}><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof AudioFeedbackCard>;

export const AudioFeedback: Story = {};
