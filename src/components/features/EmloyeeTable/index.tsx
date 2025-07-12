import { formatPhone } from '@/utils/formatters';
import styles from './EmployeeTable.module.css';
import { Table } from '@/components/common/Table';
import { MobileCard } from '@/components/common/MobileCard';
import type { Employee } from '@/services/employeeService';

interface EmployeeTableProps {
  filteredEmployees: Employee[];
  loading: boolean;
  error: string | null;
}

const EmployeeTable = ({
  filteredEmployees,
  loading,
  error,
}: EmployeeTableProps) => {
  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Carregando funcionários...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          Erro ao carregar funcionários: {error}
        </div>
      </div>
    );
  }

  if (!filteredEmployees || filteredEmployees.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>Nenhum funcionário encontrado</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Desktop Table */}
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell width="80px" align="center">
              FOTO
            </Table.HeadCell>
            <Table.HeadCell>NOME</Table.HeadCell>
            <Table.HeadCell>CARGO</Table.HeadCell>
            <Table.HeadCell>DATA DE ADMISSÃO</Table.HeadCell>
            <Table.HeadCell>TELEFONE</Table.HeadCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredEmployees.map(employee => (
            <Table.Row key={employee.id}>
              <Table.Cell align="center">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className={styles.avatar}
                />
              </Table.Cell>
              <Table.Cell>{employee.name}</Table.Cell>
              <Table.Cell>{employee.job}</Table.Cell>
              <Table.Cell>
                {new Date(employee.admission_date).toLocaleDateString('pt-BR')}
              </Table.Cell>
              <Table.Cell>{formatPhone(employee.phone)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {/* Mobile Cards */}
      <MobileCard.Root>
        <MobileCard.Header>
          <span>FOTO</span>
          <span>NOME</span>
          <div className={styles.iconContainer}>
            <div className={styles.circle} />
          </div>
        </MobileCard.Header>

        {filteredEmployees.map(employee => (
          <MobileCard.Item key={employee.id} id={employee.id}>
            <MobileCard.Main>
              <div className={styles.mobileAvatar}>
                <img
                  src={employee.image}
                  alt={employee.name}
                  className={styles.avatar}
                />
              </div>
              <span>{employee.name}</span>
              <div className={styles.iconContainer}>
                <MobileCard.Chevron />
              </div>
            </MobileCard.Main>

            <MobileCard.Details>
              <MobileCard.DetailRow label="Cargo" value={employee.job} />
              <MobileCard.DetailRow
                label="Data de admissão"
                value={new Date(employee.admission_date).toLocaleDateString(
                  'pt-BR'
                )}
              />
              <MobileCard.DetailRow
                label="Telefone"
                value={formatPhone(employee.phone)}
              />
            </MobileCard.Details>
          </MobileCard.Item>
        ))}
      </MobileCard.Root>
    </div>
  );
};

export default EmployeeTable;
