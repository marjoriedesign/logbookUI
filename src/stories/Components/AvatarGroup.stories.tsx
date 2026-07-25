import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarGroup } from '@mui/material';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar>CD</Avatar>
      <Avatar>LM</Avatar>
      <Avatar>SB</Avatar>
      <Avatar>NK</Avatar>
      <Avatar>PT</Avatar>
    </AvatarGroup>
  ),
};
