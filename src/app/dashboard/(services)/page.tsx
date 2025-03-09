import { CreateTransactionResponse, createTransactionAction } from '@/actions/transactions';
import GridBottomIcon from '@/assets/icons/grid-bottom.svg';
import GridTopIcon from '@/assets/icons/grid-top.svg';
import imageBanner from '@/assets/images/main-banner-dashboard.png';
import { FormTransaction } from '@/components/FormTransaction';
import { ReviewCategoriesChart } from '@/components/ReviewCategoriesChart';
import { ReviewChart } from '@/components/ReviewChart';
import { Typography } from '@/components/shared/Typography';
import { getUser } from '@/lib/auth/getUser';
import { getTransactionsByUser } from '@/services/transaction';
import Image from 'next/image';
import styles from './styles.module.scss';

const initialTransaction = {
  inputs: { date: '', type: '', value: '', category: '', title: '', attachment: null },
  errors: {},
} satisfies CreateTransactionResponse;

export default async function Page() {
  const user = await getUser();

  const transactions = user?.id
    ? await getTransactionsByUser(user.id, { type: ['deposit', 'withdraw', 'investment', 'transfer'] })
    : [];

  console.log(transactions);

  return (
    <>
      <section className={styles.pageContent}>
        <GridTopIcon className={styles.gridTop} />
        <GridBottomIcon className={styles.gridBottom} />

        <Typography variant='heading1' className={styles.title}>
          Nova transação
        </Typography>

        <div className={styles.content}>
          <FormTransaction
            key='transactions'
            transactionAction={async (state, action) => {
              'use server';
              return await createTransactionAction(state, action);
            }}
            initialTransaction={initialTransaction}
          />

          <Image
            src={imageBanner}
            alt='Ilustração de uma pessoa estilizada segurando um cartão de crédito grande, vestida com roupa escura e botas, com uma planta ao lado.'
            width={328}
            height={231}
            className={styles.banner}
          />
        </div>
      </section>

      {transactions?.length > 0 && (
        <section className={styles.pageContent}>
          <GridTopIcon className={styles.gridTop} />
          <GridBottomIcon className={styles.gridBottom} />

          <Typography variant='heading1' className={styles.title}>
            Balanço financeiro
          </Typography>

          <ReviewChart transactions={transactions} />
          <ReviewCategoriesChart transactions={transactions} />
        </section>
      )}
    </>
  );
}
