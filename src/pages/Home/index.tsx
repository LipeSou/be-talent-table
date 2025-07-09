import SearchInput from '@/components/common/SearchInput';
import styles from './Home.module.css';
import EmployeeTable from '@/components/features/EmloyeeTable';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHeaderContent}>
        <div>
          <h1 className={styles.employeeText}>Funcionários</h1>
        </div>
        <div className={styles.searchContainer}>
          <SearchInput />
        </div>
      </div>

      <div>
        <EmployeeTable />
      </div>
    </div>
  );
}
