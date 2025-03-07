import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/theme/globals.scss';
import type { Metadata } from 'next';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Bytebank | FIAP Tech Challenge',
  description:
    'Bytebank é o seu sistema bancário digital, permitindo gerenciar contas, realizar transações e acompanhar saldos de forma simples e eficiente!',
};

interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({ children, modal }: Readonly<LayoutProps>) {
  return (
    <div className={styles.app}>
      <Header />
      {children}
      <Footer />
      {modal}
    </div>
  );
}
