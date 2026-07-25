import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, Stack } from '@mui/material';
import { RiUserLine } from '../../icons';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {
  render: () => <Avatar>CD</Avatar>,
};

export const Icon: Story = {
  render: () => (
    <Avatar>
      <RiUserLine size={20} />
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>CD</Avatar>
      <Avatar>CD</Avatar>
      <Avatar sx={{ width: 56, height: 56, fontSize: 24 }}>CD</Avatar>
    </Stack>
  ),
};
