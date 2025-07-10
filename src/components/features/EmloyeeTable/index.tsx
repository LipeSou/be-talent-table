import { ChevronDown } from '@/components/icon/ChevronDown';
import styles from './EmployeeTable.module.css';
import { useState } from 'react';
import { ChevronUp } from '@/components/icon/ChevronUp';

const EmplyeeTable = () => {
  const employees = [1, 2, 3, 4, 5];
  const [expandedRow, setExpandedRow] = useState();

  const handleMobileCardClick = index => {
    setExpandedRow(expandedRow === index ? null : index);
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
            <div className={styles.mobileCardHeader}>
              <div className={styles.mobileCardPhoto}>minha imagem</div>
              <div className={styles.mobileCardName}>
                <span>Giovana L. Arruda</span>
              </div>
              <div>
                {expandedRow === employee ? <ChevronDown /> : <ChevronUp />}
              </div>
            </div>
            <div
              className={`${styles.expandedContent} ${expandedRow === employee ? styles.open : ''}`}
            >
              <div className={styles.detailRow}>
                <span className={styles.detailRowDescription}>Cargo</span>
                <span>employee.cargo</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailRowDescription}>
                  Data de admissão
                </span>
                <span>employee.cargo</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailRowDescription}>Telefone</span>
                <span>employee.cargo</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmplyeeTable;
