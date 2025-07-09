import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';
import styles from './defaultLayout.module.css';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
    </>
  );
}
