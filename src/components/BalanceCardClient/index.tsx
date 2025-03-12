'use client';

import dynamic from 'next/dynamic';

interface BalanceCardClientProps {
  balance: number;
}

const BalanceValue = dynamic(() => import('@/components/BalanceValue').then((mod) => mod.BalanceValue), { ssr: false });

export const BalanceCardClient = ({ balance }: BalanceCardClientProps) => {
  return <BalanceValue balance={balance} />;
};
