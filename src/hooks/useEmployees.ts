import { useState, useEffect, useMemo } from 'react';
import { employeeService, Employee } from '../services/employeeService';

export interface UseEmployeesReturn {
  employees: Employee[];
  filteredEmployees: Employee[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  refetch: () => Promise<void>;
}

export const useEmployees = (): UseEmployeesReturn => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchEmployees = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const data = await employeeService.getEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      console.error('Failed to fetch employees:', err);
    } finally {
      setLoading(false);
    }
  };

  // Função para normalizar strings para busca
  const normalizeString = (str: string): string => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  };

  // Filtrar funcionários baseado no termo de busca
  const filteredEmployees = useMemo(() => {
    if (!searchTerm.trim()) {
      return employees;
    }

    const normalizedSearch = normalizeString(searchTerm);

    return employees.filter(employee => {
      const normalizedName = normalizeString(employee.name);
      const normalizedJob = normalizeString(employee.job);
      const normalizedPhone = normalizeString(employee.phone);

      return (
        normalizedName.includes(normalizedSearch) ||
        normalizedJob.includes(normalizedSearch) ||
        normalizedPhone.includes(normalizedSearch)
      );
    });
  }, [employees, searchTerm]);

  // Carregar funcionários na montagem do componente
  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    employees,
    filteredEmployees,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    refetch: fetchEmployees,
  };
};
