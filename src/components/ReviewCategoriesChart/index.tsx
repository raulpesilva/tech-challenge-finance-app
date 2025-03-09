'use client';

import { CATEGORIES_TYPES_DICTIONARY } from '@/@types/category';
import { Transaction } from '@/@types/transaction';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

interface ReviewCategoriesChartProps {
  transactions: Transaction[];
}

const COLORS = [
  '#004d61',
  '#ff5031',
  '#47a138',
  '#bf1313',
  '#000000',
  '#94e9ff',
  '#ffd2ca',
  '#c3e8bd',
  '#f6a8a8',
  '#666666',
];

const tooltipStyles = {
  backgroundColor: '#ffffff',
  border: '1px solid #8b8b8b',
  borderRadius: '8px',
  padding: '8px',
  fontSize: 14,
};

const getChartData = (transactions: Transaction[]) => {
  const values = transactions.reduce(
    (acc, transaction) => {
      const category = transaction.category;

      if (!acc[category]) return { ...acc, [category]: { name: CATEGORIES_TYPES_DICTIONARY[category], Quant: 1 } };
      return { ...acc, [category]: { ...acc[category], Quant: acc[category].Quant + 1 } };
    },
    {} as { [key: string]: { name: string; Quant: number } }
  );

  const categories = Object.values(values);
  const categoriesSorted = categories.sort((a, b) => b.Quant - a.Quant);
  return categoriesSorted;
};

export const ReviewCategoriesChart = ({ transactions }: ReviewCategoriesChartProps) => {
  const sortedData = getChartData(transactions);
  if (!sortedData?.length) return null;

  return (
    <div className={styles.container}>
      <Typography variant='heading2' className={styles.title}>
        Distribuição de Transações por Categoria
      </Typography>

      <ResponsiveContainer width='100%' height={256}>
        <PieChart>
          <Pie data={sortedData} dataKey='Quant' nameKey='name' outerRadius='95%' stroke='#8b8b8b' strokeWidth={1}>
            {sortedData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={tooltipStyles}
            formatter={(value, name) => [`${name}: ${value} ${value === 1 ? 'transação' : 'transações'}`, '']}
          />

          <Legend
            layout='vertical'
            align='right'
            verticalAlign='middle'
            payload={sortedData.map((entry, index) => ({
              value: `${entry.name} (${entry.Quant})`,
              type: 'square',
              color: COLORS[index % COLORS.length],
            }))}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
