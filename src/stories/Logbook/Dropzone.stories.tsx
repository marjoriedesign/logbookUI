import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogbookDropzone } from '../../components/LogbookDropzone';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof LogbookDropzone> = {
  title: 'Logbook/Dropzone',
  component: LogbookDropzone,
  decorators: [(Story) => (<PageLayout title="Dropzone"><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof LogbookDropzone>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Default (clic ou glisser-déposer, 480px de large)">
        <Box sx={{ width: { xs: '100%', sm: 480 } }}>
          <LogbookDropzone onFilesSelected={(files) => console.log('files', files)} />
        </Box>
      </Section>
      <Section title="Libellés personnalisés">
        <Box sx={{ width: { xs: '100%', sm: 480 } }}>
          <LogbookDropzone
            label="Déposer la grille d'évaluation"
            helperText="PDF, jusqu'à 10 Mo"
            accept="application/pdf"
            multiple={false}
          />
        </Box>
      </Section>
      <Section title="Désactivé">
        <Box sx={{ width: { xs: '100%', sm: 480 } }}>
          <LogbookDropzone disabled />
        </Box>
      </Section>
    </Sections>
  ),
};
