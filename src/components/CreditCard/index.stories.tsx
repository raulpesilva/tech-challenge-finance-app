import type { Meta, StoryObj } from '@storybook/react';
import { CreditCard } from './index';

const user = {
  id: 'e00a',
  name: 'raul ',
  email: 'admin@yellowcam.com',
  password: '$2b$10$GvmWGm/8gF9NwHDzMGbPHOZLUnBc3J3eB3aL9blyY2976P77iZWZW',
  acceptedTerm: false,
};

const meta: Meta<typeof CreditCard> = {
  title: 'Components/CreditCard',
  component: CreditCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CreditCard>;

export const PhysicalCard: Story = {
  render: () => (
    <CreditCard type='physical' cardNumber='**** **** **** 1234' cardFunction='Débito/Crédito' user={user} />
  ),
};

export const VirtualCard: Story = {
  render: () => <CreditCard type='virtual' cardNumber='**** **** **** 6789' cardFunction='Débito' user={user} />,
};
