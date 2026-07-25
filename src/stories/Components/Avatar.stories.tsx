import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, Stack } from '@mui/material';
import { RiUserLine } from '../../icons';
import { PageLayout, Sections, Section } from '../PageLayout';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [(Story) => (<PageLayout title="Avatar"><Story /></PageLayout>)],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Sections>
      <Section title="Initials">
        <Avatar>CD</Avatar>
      </Section>

      <Section title="Icon">
        <Avatar>
          <RiUserLine size={20} />
        </Avatar>
      </Section>

      <Section title="Sizes">
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>CD</Avatar>
          <Avatar>CD</Avatar>
          <Avatar sx={{ width: 56, height: 56, fontSize: 24 }}>CD</Avatar>
        </Stack>
      </Section>
    </Sections>
  ),
};
