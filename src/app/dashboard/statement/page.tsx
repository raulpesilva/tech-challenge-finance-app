import { CATEGORIES_TYPES_DICTIONARY_MAP, CategoryTypeDictionaryValue } from '@/@types/category';
import { Filter } from '@/components/Filter';
import { Pagination } from '@/components/Pagination';
import { Search } from '@/components/Search';
import { Typography } from '@/components/shared/Typography';
import { TransactionCard } from '@/components/TransactionCard';
import { getUser } from '@/lib/auth/getUser';
import { getTransactionsByUser } from '@/services/transaction';
import { redirect } from 'next/navigation';
import styles from './styles.module.scss';

interface PageProps {
  searchParams: Promise<{ page?: string; query?: string; category?: string }>;
}

const itemsPerPage = 10;
const requestLimit = itemsPerPage + 1;

export default async function Page({ searchParams }: PageProps) {
  const user = await getUser();
  if (!user) return null;
  const awaitedSearchParams = await searchParams;
  const page = awaitedSearchParams.page ? Number(awaitedSearchParams.page) : 1;
  const query = awaitedSearchParams.query;
  const category = CATEGORIES_TYPES_DICTIONARY_MAP[awaitedSearchParams.category as CategoryTypeDictionaryValue];
  const startRequest = (page - 1) * itemsPerPage;
  const endRequest = startRequest + requestLimit;

  const transactions = await getTransactionsByUser(user.id, {
    _sort: '-dateIso',
    _start: startRequest,
    _end: endRequest,
    title: query,
    category,
  });

  if (!transactions) return null;
  if (!transactions.length && page !== 1)
    redirect(query ? `/dashboard/statement?query=${query}` : '/dashboard/statement');

  const transactionsSlice = transactions.slice(0, itemsPerPage);

  return (
    <div className={styles.container}>
      <Typography variant='heading1' size='xl'>Extrato completo</Typography>

      <div className={styles.controlsContainer}>
        <Search />
        <Filter />
      </div>

      {!transactionsSlice.length && (
        <Typography variant='paragraph' className={styles.noTransactions}>
          Sem transações
        </Typography>
      )}

      {!!transactionsSlice.length && (
        <div className={styles.transactions}>
          {transactionsSlice.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>
      )}

      {!!transactionsSlice.length && (
        <Pagination page={page} itemsPerPage={itemsPerPage} totalItems={transactions.length} />
      )}
    </div>
  );
}
