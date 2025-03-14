import type { Meta, StoryObj } from '@storybook/react';
import { BalanceCard } from './index';

const user = {
  id: 'e00a',
  name: 'raul ',
  email: 'admin@yellowcam.com',
  password: '$2b$10$GvmWGm/8gF9NwHDzMGbPHOZLUnBc3J3eB3aL9blyY2976P77iZWZW',
  acceptedTerm: false,
};

const meta: Meta<typeof BalanceCard> = {
  title: 'Components/BalanceCard',
  component: BalanceCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BalanceCard>;

export const Default: Story = {
  render: () => <BalanceCard user={user} />,
};
