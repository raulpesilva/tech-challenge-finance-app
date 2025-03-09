'use client';

import { Transaction, TRANSACTIONS_TYPES_DICTIONARY } from '@/@types/transaction';
import { formatCurrency } from '@/utils/formatCurrency';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

interface ReviewChartProps {
  transactions: Transaction[];
}

const fontSize = 14;
const fontColor = '#8b8b8b';
const tooltipStyles = {
  backgroundColor: '#ffffff',
  border: '1px solid #8b8b8b',
  borderRadius: '8px',
  padding: '8px',
  fontSize: '14px',
};
const tooltipShadow = '#00000019';

const COLORS = ['#004d61', '#ff5031', '#47a138', '#bf1313'];

const getChartData = (transactions: Transaction[]) => {
  const values = transactions.reduce(
    (acc, transaction, i) => {
      const type = transaction.type;
      const value = transaction.value / 100;
      const color = COLORS[i] ?? '#004d61';

      if (!acc[type]) return { ...acc, [type]: { name: TRANSACTIONS_TYPES_DICTIONARY[type], Valor: value, color } };
      return { ...acc, [type]: { ...acc[type], Valor: acc[type].Valor + value, color } };
    },
    {} as { [key: string]: { name: string; Valor: number; color: string } }
  );

  return Object.values(values);
};

const renderCustomLabel = ({ x, y, width, value }: { x: number; y: number; width: number; value: number }) => (
  <text
    x={x + width / 2}
    y={y - 10}
    fill={fontColor}
    textAnchor='middle'
    fontSize={fontSize}
    className={styles.textBar}
  >
    {formatCurrency(value)}
  </text>
);

export const ReviewChart = ({ transactions }: ReviewChartProps) => {
  const data = getChartData(transactions);
  if (!data?.length) return null;

  return (
    <div className={styles.container}>
      <Typography variant='heading2' className={styles.title}>
        Valores por Tipo de Transação
      </Typography>

      <ResponsiveContainer width='100%' height={320}>
        <BarChart data={data}>
          <XAxis dataKey='name' tick={{ fill: fontColor, fontSize }} className={styles.xAxis} />

          <YAxis
            width={80}
            tick={{ fill: fontColor, fontSize }}
            tickFormatter={(value) => formatCurrency(Number(value)).replace('R$ ', 'R$')}
          />

          <Tooltip
            formatter={(value) => formatCurrency(Number(value))}
            cursor={{ fill: tooltipShadow }}
            contentStyle={tooltipStyles}
          />

          <Bar dataKey='Valor' radius={[8, 8, 0, 0]} label={renderCustomLabel} barSize={16}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
