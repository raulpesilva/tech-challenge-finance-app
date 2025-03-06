'use client';

import ArrowIcon from '@/assets/icons/arrow-outline-icon.svg';
import { usePathname, useSearchParams } from 'next/navigation';
import { ButtonLink } from '../shared/ButtonLink';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

interface PaginationProps {
  page: number;
  itemsPerPage: number;
  totalItems: number;
}

export const Pagination = ({ page, itemsPerPage, totalItems }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const setUrl = (page: number) => (query ? `${pathname}?q=${query}&page=${page}` : `${pathname}?page=${page}`);

  return (
    <div className={styles.container}>
      {page > 1 && (
        <ButtonLink href={setUrl(page - 1)} variant='contained' color='tertiary' className={styles.prevArrow}>
          <ArrowIcon />
        </ButtonLink>
      )}

      <Typography variant='paragraph'>Página {page}</Typography>

      {totalItems > itemsPerPage && (
        <ButtonLink href={setUrl(page + 1)} variant='contained' color='tertiary' className={styles.nextArrow}>
          <ArrowIcon />
        </ButtonLink>
      )}
    </div>
  );
};
