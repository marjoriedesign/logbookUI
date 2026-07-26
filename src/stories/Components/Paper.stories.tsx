import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paper, Stack, Typography } from '@mui/material';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  decorators: [(Story) => (<PageLayout title="Paper"><Story /></PageLayout>)],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Elevations">
        <Stack direction="row" spacing={3} useFlexGap sx={{ flexWrap: 'wrap', rowGap: '40px' }}>
          {[0, 1, 3, 6, 12].map((elevation) => (
            <Paper key={elevation} elevation={elevation} sx={{ p: 2, width: 140 }}>
              <Typography variant="body2">elevation={elevation}</Typography>
            </Paper>
          ))}
        </Stack>
      </Section>

      <Section title="Outlined">
        <Paper variant="outlined" sx={{ p: 2, width: 200 }}>
          <Typography variant="body2">variant="outlined"</Typography>
        </Paper>
      </Section>
    </Sections>
  ),
};
