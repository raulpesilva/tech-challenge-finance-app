import '@/assets/images/main-banner-under-construction.png';
import { NavLink } from '@/components/shared/NavLink';
import { logout } from '@/lib/auth/logout';
import { redirect } from 'next/navigation';
import { LogoutButton } from '../LogoutButton';
import styles from './styles.module.scss';

export const MenuAccount = () => {
  const handleLogout = async () => {
    'use server';
    await logout();
    redirect('/');
  };

  return (
    <div className={styles.container}>
      <NavLink href='/dashboard/account' color='cta' colorActive='secondary' replace>
        Minha conta
      </NavLink>

      <a href='/dashboard/settings'>Configurações</a>

      <form action={handleLogout}>
        <LogoutButton />
      </form>
    </div>
  );
};
