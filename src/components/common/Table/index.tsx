import styles from './Table.module.css';
import {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TableHeadCellProps,
} from './types';

const TableRoot = ({ children, className }: TableProps) => {
  return (
    <div className={`${styles.tableContainer} ${className || ''}`}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

const TableHeader = ({ children, className }: TableHeaderProps) => {
  return (
    <thead className={`${styles.tableHeader} ${className || ''}`}>
      {children}
    </thead>
  );
};

const TableBody = ({ children, className }: TableBodyProps) => {
  return (
    <tbody className={`${styles.tableBody} ${className || ''}`}>
      {children}
    </tbody>
  );
};

const TableRow = ({ children, className, onClick }: TableRowProps) => {
  return (
    <tr className={`${styles.tableRow} ${className || ''}`} onClick={onClick}>
      {children}
    </tr>
  );
};

const TableCell = ({ children, className, align = 'left' }: TableCellProps) => {
  return (
    <td
      className={`${styles.tableCell} ${className || ''}`}
      style={{ textAlign: align }}
    >
      {children}
    </td>
  );
};

const TableHeadCell = ({
  children,
  className,
  align = 'left',
  width,
}: TableHeadCellProps) => {
  return (
    <th
      className={`${styles.tableHeadCell} ${className || ''}`}
      style={{ textAlign: align, width }}
    >
      {children}
    </th>
  );
};

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
};
