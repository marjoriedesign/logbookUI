import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, Box, Typography } from '@mui/material';
import { designTokens } from '../../theme/generated/tokens';
import { PageLayout, Sections, Section } from '../PageLayout';

import logoGreen from '../../assets/logo/LogoGreen.svg';
import logoWhite from '../../assets/logo/LogoWhite.svg';

import boy1 from '../../assets/avatars/Boy1.svg';
import boy2 from '../../assets/avatars/Boy2.svg';
import boy3 from '../../assets/avatars/Boy3.svg';
import boy4 from '../../assets/avatars/Boy4.svg';
import girl1 from '../../assets/avatars/Girl1.svg';
import girl2 from '../../assets/avatars/Girl2.svg';
import girl3 from '../../assets/avatars/Girl3.svg';
import girl4 from '../../assets/avatars/Girl4.svg';

import announcement from '../../assets/illustrations/Announcement.svg';
import certification from '../../assets/illustrations/Certification.svg';
import editing from '../../assets/illustrations/Editing.svg';
import feedback from '../../assets/illustrations/Feedback.svg';
import growth from '../../assets/illustrations/Growth.svg';
import inbox from '../../assets/illustrations/Inbox.svg';
import oralPractice from '../../assets/illustrations/OralPractice.svg';

const avatarVisuals = [
  { name: 'Boy1', src: boy1 },
  { name: 'Boy2', src: boy2 },
  { name: 'Boy3', src: boy3 },
  { name: 'Boy4', src: boy4 },
  { name: 'Girl1', src: girl1 },
  { name: 'Girl2', src: girl2 },
  { name: 'Girl3', src: girl3 },
  { name: 'Girl4', src: girl4 },
];

const iconIllustrations = [
  { name: 'Announcement', src: announcement },
  { name: 'Certification', src: certification },
  { name: 'Editing', src: editing },
  { name: 'Feedback', src: feedback },
  { name: 'Growth', src: growth },
  { name: 'Inbox', src: inbox },
  { name: 'Oral Practice', src: oralPractice },
];

const avatarCellSize = designTokens.spacing['12']; // 96px, même cran que Foundations/Icons
const illustrationCellSize = 136; // taille native des assets (viewBox 136x136)

function VisualsFoundations() {
  return (
    <PageLayout title="Visuals">
      <Sections>
        <Section title="Logo">
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Box component="img" src={logoGreen} alt="Logo Logbook (vert)" sx={{ height: 40 }} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                borderRadius: 1,
                backgroundColor: designTokens.color.primary.main,
              }}
            >
              <Box component="img" src={logoWhite} alt="Logo Logbook (blanc)" sx={{ height: 40 }} />
            </Box>
          </Box>
        </Section>

        <Section title="Avatars">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fill, ${avatarCellSize}px)`,
              gap: 2,
            }}
          >
            {avatarVisuals.map(({ name, src }) => (
              <Box
                key={name}
                sx={{
                  width: avatarCellSize,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Avatar src={src} alt={name} sx={{ width: 56, height: 56 }} />
                <Typography variant="caption" sx={{ textAlign: 'center' }}>
                  {name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Section>

        <Section title="Icon Illustrations">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fill, ${illustrationCellSize}px)`,
              gap: 2,
            }}
          >
            {iconIllustrations.map(({ name, src }) => (
              <Box
                key={name}
                sx={{
                  width: illustrationCellSize,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box component="img" src={src} alt={name} sx={{ width: illustrationCellSize, height: illustrationCellSize }} />
                <Typography variant="caption" sx={{ textAlign: 'center' }}>
                  {name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Section>
      </Sections>
    </PageLayout>
  );
}

const meta: Meta<typeof VisualsFoundations> = {
  title: 'Foundations/Visuals',
  component: VisualsFoundations,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof VisualsFoundations>;

export const Default: Story = {};
