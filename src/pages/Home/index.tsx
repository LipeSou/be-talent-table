import SearchInput from '@/components/common/SearchInput';
import styles from '@/pages/Home/Home.module.css';
import EmployeeTable from '@/components/features/EmployeeTable';
import { useEmployees } from '@/hooks/useEmployees';

export default function Home() {
  const { filteredEmployees, loading, error, searchTerm, setSearchTerm } =
    useEmployees();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHeaderContent}>
        <div>
          <h1 className={styles.employeeText}>Funcionários</h1>
        </div>
        <div className={styles.searchContainer}>
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      <div>
        <EmployeeTable
          filteredEmployees={filteredEmployees}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
}
