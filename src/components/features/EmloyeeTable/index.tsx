import { ChevronDown } from '@/components/icon/ChevronDown';
import styles from './EmployeeTable.module.css';

const EmplyeeTable = () => {
  const employees = [1, 2, 3, 4, 5];

  const handleMobileCardClick = employee => {
    console.log('Card clicado:', employee);
  };
  return (
    <div className={styles.tableContainer}>
      {/* Desktop */}
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th>TELEFONE</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {employees.map(employee => (
            <tr key={employee}>
              <td className={styles.photoCell}>minha imagem</td>
              <td>Giovana L. Arruda</td>
              <td>Front-end</td>
              <td>00/00/0000</td>
              <td>+55 (55) 55555-555</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Mobile */}
      <div className={styles.mobileCardList}>
        <div className={styles.mobileHeader}>
          <div className={styles.mobileHeaderPhoto}>FOTO</div>
          <div className={styles.mobileHeaderName}>NOME</div>
          <div className={styles.mobileHeaderIcon}>
            <div className={styles.circle} />
          </div>
        </div>

        {employees.map(employee => (
          <div
            key={employee}
            className={styles.mobileCard}
            onClick={() => handleMobileCardClick(employee)}
          >
            <div className={styles.mobileCardPhoto}>minha imagem</div>
            <div className={styles.mobileCardName}>
              <span>Giovana L. Arruda</span>
            </div>
            <div className={styles.mobileCardDropdown}>
              <ChevronDown />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmplyeeTable;
