import { ChevronDown } from '@/components/icon/ChevronDown';
import styles from './EmployeeTable.module.css';
import { useState } from 'react';
import { ChevronUp } from '@/components/icon/ChevronUp';
import { useEmployees } from '@/hooks/useEmployees';
import { formatPhone } from '@/utils/formatters';

const EmplyeeTable = () => {
  const { filteredEmployees } = useEmployees();

  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const handleMobileCardClick = (index: string) => {
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
          {!!filteredEmployees &&
            filteredEmployees.length > 0 &&
            filteredEmployees.map(employee => (
              <tr key={employee.id}>
                <td className={styles.photoCell}>
                  <img src={employee.image} className={styles.avatar} />
                </td>
                <td>{employee.name}</td>
                <td>{employee.job}</td>
                <td>
                  {new Date(employee.admission_date).toLocaleDateString(
                    'pt-BR'
                  )}
                </td>
                <td>{formatPhone(employee.phone)}</td>
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

        {!!filteredEmployees &&
          filteredEmployees.length > 0 &&
          filteredEmployees.map(employee => (
            <div
              key={employee.id}
              className={styles.mobileCard}
              onClick={() => handleMobileCardClick(employee.id)}
            >
              <div className={styles.mobileCardHeader}>
                <div className={styles.mobileCardPhoto}>
                  <img src={employee.image} className={styles.avatar} />
                </div>
                <div className={styles.mobileCardName}>
                  <span>{employee.name}</span>
                </div>
                <div>
                  {expandedRow === employee.id ? (
                    <ChevronDown />
                  ) : (
                    <ChevronUp />
                  )}
                </div>
              </div>
              <div
                className={`${styles.expandedContent} ${expandedRow === employee.id ? styles.open : ''}`}
              >
                <div className={styles.detailRow}>
                  <span className={styles.detailRowDescription}>Cargo</span>
                  <span>{employee.job}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailRowDescription}>
                    Data de admissão
                  </span>
                  <span>
                    {new Date(employee.admission_date).toLocaleDateString(
                      'pt-BR'
                    )}
                  </span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailRowDescription}>Telefone</span>
                  <span>{formatPhone(employee.phone)}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EmplyeeTable;
