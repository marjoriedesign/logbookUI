import { Stack, Typography, Button, Card, CardContent, Chip } from '@mui/material';
import { RiMicLine, RiCheckboxCircleLine } from '@remixicon/react';

function App() {
  return (
    <Stack spacing={3} sx={{ maxWidth: 480, mx: 'auto', mt: 8, px: 2 }}>
      <Typography variant="h2">Logbook Design System</Typography>
      <Typography variant="body1" color="textSecondary">
        Ceci est un aperçu rapide. L'environnement complet de test des
        composants vit dans Storybook — voir le README.
      </Typography>
      <Card>
        <CardContent>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <RiMicLine size={20} />
            <Typography variant="body2">Enregistrement en cours</Typography>
            <Chip label="IA" size="small" color="secondary" />
          </Stack>
        </CardContent>
      </Card>
      <Button startIcon={<RiCheckboxCircleLine size={18} />}>
        Valider la correction
      </Button>
    </Stack>
  );
}

export default App;
