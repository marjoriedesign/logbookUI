import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarGroup, Box, Stack, Typography } from '@mui/material';
import { RiUserLine } from '../../icons';
import { PageLayout, Sections, Section } from '../PageLayout';
import { designTokens } from '../../theme/generated/tokens';

import boy1 from '../../assets/avatars/Boy1.svg';
import boy2 from '../../assets/avatars/Boy2.svg';
import boy3 from '../../assets/avatars/Boy3.svg';
import boy4 from '../../assets/avatars/Boy4.svg';
import girl1 from '../../assets/avatars/Girl1.svg';
import girl2 from '../../assets/avatars/Girl2.svg';
import girl3 from '../../assets/avatars/Girl3.svg';
import girl4 from '../../assets/avatars/Girl4.svg';

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

const NOTES = [
  'Fallback colorDefault corrigé à l’AA : le défaut MUI natif (#bdbdbd + texte blanc, 1.87:1) est hors nuancier et sous le seuil — remplacé par un fond pastel + text.secondary (8.42:1).',
  'Les 4 teintes "Initials" ne sont pas des tokens de thème pour Avatar : elles sont posées directement en sx dans chaque story, à reproduire manuellement si utilisées ailleurs.',
  'AvatarGroup : spacing="small" (chevauchement -16px au lieu de -8px par défaut) et un z-index inversé sur 10 niveaux (en dur, sans lien à un token) pour empiler les avatars de gauche à droite plutôt que l’ordre natif MUI.',
];

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [(Story) => (<PageLayout title="Avatar" notes={NOTES}><Story /></PageLayout>)],
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Initials">
        <Stack direction="row" spacing={2}>
          {/* Mêmes 4 teintes que les fonds des avatars illustrés (section
              Illustrated), remplacées par leur équivalent le plus proche du
              nuancier (orange.100/yellow.200/green.100/teal.100). */}
          <Avatar sx={{ backgroundColor: designTokens.color.orange['100'], color: designTokens.color.text.secondary }}>
            CD
          </Avatar>
          <Avatar sx={{ backgroundColor: designTokens.color.yellow['200'], color: designTokens.color.text.secondary }}>
            CD
          </Avatar>
          <Avatar sx={{ backgroundColor: designTokens.color.green['100'], color: designTokens.color.text.secondary }}>
            CD
          </Avatar>
          <Avatar sx={{ backgroundColor: designTokens.color.teal['100'], color: designTokens.color.text.secondary }}>
            CD
          </Avatar>
        </Stack>
      </Section>

      <Section title="Icon">
        <Avatar>
          <RiUserLine size={20} />
        </Avatar>
      </Section>

      <Section title="Illustrated">
        <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {avatarVisuals.map(({ name, src }) => (
            <Box key={name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
              <Avatar src={src} alt={name} />
              <Typography variant="caption" color="textSecondary">
                {name}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Section>

      <Section title="Sizes">
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Avatar src={boy1} alt="Boy1" sx={{ width: 24, height: 24 }} />
          <Avatar src={boy1} alt="Boy1" />
          <Avatar src={boy1} alt="Boy1" sx={{ width: 56, height: 56 }} />
        </Stack>
      </Section>

      <Section title="AvatarGroup">
        <AvatarGroup max={4}>
          <Avatar src={boy1} alt="Boy1" />
          <Avatar src={girl1} alt="Girl1" />
          <Avatar src={boy2} alt="Boy2" />
          <Avatar src={girl2} alt="Girl2" />
          <Avatar src={boy3} alt="Boy3" />
        </AvatarGroup>
      </Section>
    </Sections>
  ),
};
