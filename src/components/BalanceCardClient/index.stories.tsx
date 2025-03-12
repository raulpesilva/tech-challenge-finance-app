import type { Meta, StoryObj } from '@storybook/react';
import { BalanceCardClient } from './index';

const meta: Meta<typeof BalanceCardClient> = {
  title: 'Components/BalanceCardClient',
  component: BalanceCardClient,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BalanceCardClient>;

export const Default: Story = {
  render: () => <BalanceCardClient balance={100000} />,
};
