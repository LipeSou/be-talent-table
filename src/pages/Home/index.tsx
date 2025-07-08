import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.employeeText}>Funcionários</h1>
    </div>
  );
}
