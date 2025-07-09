import styles from './EmployeeTable.module.css';

const EmplyeeTable = () => {
  const employees = [1, 2, 3, 4, 5];
  return (
    <div className={styles.tableContainer}>
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
    </div>
  );
};

export default EmplyeeTable;
