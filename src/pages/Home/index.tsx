import SearchInput from '@/components/common/SearchInput';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div>
        <h1 className={styles.employeeText}>Funcionários</h1>
      </div>
      <div className={styles.searchContainer}>
        <SearchInput />
      </div>
    </div>
  );
}
