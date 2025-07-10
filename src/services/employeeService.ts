export interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

class EmployeeService {
  private readonly baseUrl = 'http://localhost:3001';

  async getEmployees(): Promise<Employee[]> {
    try {
      const response = await fetch(`${this.baseUrl}/employees`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Employee[] = await response.json();
      return data;
    } catch (error) {
      console.error('Falha ao carregar funcionários:', error);
      throw new Error(
        'Falha ao carregar funcionários. Verifique se o json-server está rodando.'
      );
    }
  }
}

export const employeeService = new EmployeeService();
