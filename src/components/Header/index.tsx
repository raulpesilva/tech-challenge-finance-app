import { ButtonLink } from '@/components/shared/ButtonLink';
import { Suspense } from 'react';
import { Logo } from '../Logo';
import { LogoType } from '../LogoType';
import { MenuServices } from '../MenuServices';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.linksContent}>
          <LogoType className={styles.logoType} />
          <Logo className={styles.logo} />
          <Suspense>
            <MenuServices />
          </Suspense>
        </div>

        <div className={styles.ctaContent}>
          <ButtonLink href='/register' variant='contained' color='tertiary' className={styles.cta}>
            Abrir conta
          </ButtonLink>

          <ButtonLink href='/login' variant='outlined' color='tertiary' className={styles.cta}>
            Já tenho conta
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};
