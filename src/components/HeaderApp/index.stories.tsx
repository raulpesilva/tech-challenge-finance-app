import type { Meta, StoryObj } from '@storybook/react';
import { HeaderApp } from './index';

const user = {
  id: 'e00a',
  name: 'raul ',
  email: 'admin@yellowcam.com',
  password: '$2b$10$GvmWGm/8gF9NwHDzMGbPHOZLUnBc3J3eB3aL9blyY2976P77iZWZW',
  acceptedTerm: false,
};

const meta: Meta<typeof HeaderApp> = {
  title: 'Components/HeaderApp',
  component: HeaderApp,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeaderApp>;

export const Default: Story = {
  render: () => <HeaderApp user={user} />,
};
