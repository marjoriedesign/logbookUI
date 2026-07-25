import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, Paper, Typography } from '@mui/material';

function DemoGrid() {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3, 4].map((n) => (
        <Grid key={n} size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="body2">Élève {n}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

const meta: Meta<typeof DemoGrid> = {
  title: 'Components/Grid',
  component: DemoGrid,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof DemoGrid>;

export const Responsive: Story = {};
