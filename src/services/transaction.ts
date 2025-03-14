'use server';

import { Filters } from '@/@types/filters';
import { Transaction } from '@/@types/transaction';
import { convertToSearchString, onlyKeysWithTruthyValueAndConvertToString } from '@/utils/object';
import { MOCK_TRANSACTIONS } from './mockTransactions';

const BASE_URL = `${process.env.REACT_API_URL}/transactions`;

export const createTransaction = async (transaction: Omit<Transaction, 'id'>) => {
  'use server';
  if (process.env.NODE_ENV === 'production') {
    return MOCK_TRANSACTIONS[0];
  }

  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });

  return response.json() as Promise<Transaction>;
};

export const getTransactionsByUser = async (author: string, filters: Filters<Transaction> = {}) => {
  'use server';
  if (process.env.NODE_ENV === 'production') {
    if (author === 'e00a') {
      return MOCK_TRANSACTIONS;
    }
  }
  const searchParams = convertToSearchString(onlyKeysWithTruthyValueAndConvertToString({ author, ...filters }));
  const response = await fetch(`${BASE_URL}?${searchParams}`);
  return response.json() as Promise<Transaction[]>;
};

export const getTransactionById = async (id: string) => {
  'use server';

  if (process.env.NODE_ENV === 'production') {
    return MOCK_TRANSACTIONS.find((transaction) => transaction.id === id) || MOCK_TRANSACTIONS[0];
  }

  const response = await fetch(`${BASE_URL}/${id}`);
  const result: Transaction = await response.json();
  return result;
};

export const updateTransaction = async (transaction: Transaction) => {
  'use server';

  if (process.env.NODE_ENV === 'production') {
    return transaction;
  }

  const response = await fetch(`${BASE_URL}/${transaction.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });

  return response.json() as Promise<Transaction>;
};

export const deleteTransaction = async (id: string) => {
  'use server';

  if (process.env.NODE_ENV === 'production') {
    return MOCK_TRANSACTIONS.find((transaction) => transaction.id === id);
  }

  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  return response.json() as Promise<Transaction>;
};
