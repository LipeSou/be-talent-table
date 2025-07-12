import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '.';

// Meta configuração para o componente composto Table
const meta: Meta<typeof Table.Root> = {
  title: 'Components/Common/Table',
  component: Table.Root,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de tabela modular com subcomponentes para maior flexibilidade',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story básica mostrando uso completo da tabela
export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.HeadCell>FOTO</Table.HeadCell>
          <Table.HeadCell>NOME</Table.HeadCell>
          <Table.HeadCell>CARGO</Table.HeadCell>
          <Table.HeadCell>DATA DE ADMISSÃO</Table.HeadCell>
          <Table.HeadCell>TELEFONE</Table.HeadCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <div
              style={{
                height: '40px',
                width: '40px',
                borderRadius: '50%',
                border: '1px, solid, #000000',
              }}
            />
          </Table.Cell>
          <Table.Cell>Giovana L. Arruda</Table.Cell>
          <Table.Cell>Front-end</Table.Cell>
          <Table.Cell>12/09/2023</Table.Cell>
          <Table.Cell>+55 (55) 55555-555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <div
              style={{
                height: '40px',
                width: '40px',
                borderRadius: '50%',
                border: '1px, solid, #000000',
              }}
            />
          </Table.Cell>
          <Table.Cell>Vanessa Machado</Table.Cell>
          <Table.Cell>Front-end</Table.Cell>
          <Table.Cell>18/10/2023</Table.Cell>
          <Table.Cell>+55 (55) 55555-555</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

// Story do TableRoot com documentação de props
export const TableRootStory: Story = {
  name: 'Table.Root',
  render: args => (
    <Table.Root className={args.className}>
      <table>
        <tbody>
          <tr>
            <td>Conteúdo da tabela</td>
          </tr>
        </tbody>
      </table>
    </Table.Root>
  ),
  args: {
    className: '',
  },
  argTypes: {
    children: {
      description: 'Conteúdo da tabela (geralmente Table.Header e Table.Body)',
      control: false,
    },
    className: {
      description: 'Classes CSS adicionais para estilização',
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente raiz que envolve toda a estrutura da tabela',
      },
    },
  },
};

// Story do TableHeader
export const TableHeaderStory: Story = {
  name: 'Table.Header',
  render: () => (
    <Table.Root>
      <Table.Header className="custom-header">
        <Table.Row>
          <Table.HeadCell>Coluna 1</Table.HeadCell>
          <Table.HeadCell>Coluna 2</Table.HeadCell>
        </Table.Row>
      </Table.Header>
    </Table.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Componente para o cabeçalho da tabela (thead)',
      },
      source: {
        code: `<Table.Header className="custom-header">
  <Table.Row>
    <Table.HeadCell>Coluna 1</Table.HeadCell>
    <Table.HeadCell>Coluna 2</Table.HeadCell>
  </Table.Row>
</Table.Header>`,
      },
    },
  },
  argTypes: {
    children: {
      description:
        'Conteúdo do cabeçalho (geralmente Table.Row com Table.HeadCell)',
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      description: 'Classes CSS adicionais',
      table: { type: { summary: 'string' } },
    },
  },
};

// Story do TableBody
export const TableBodyStory: Story = {
  name: 'Table.Body',
  render: () => (
    <Table.Root>
      <Table.Body className="custom-body">
        <Table.Row>
          <Table.Cell>Dado 1</Table.Cell>
          <Table.Cell>Dado 2</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Componente para o corpo da tabela (tbody)',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Conteúdo do corpo (geralmente Table.Row com Table.Cell)',
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      description: 'Classes CSS adicionais',
      table: { type: { summary: 'string' } },
    },
  },
};

// Story do TableRow
export const TableRowStory: Story = {
  name: 'Table.Row',
  render: () => (
    <Table.Root>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Linha da tabela 1</Table.Cell>
          <Table.Cell>Linha da tabela 2</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Componente para linhas da tabela (tr)',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Conteúdo da linha (Table.Cell ou Table.HeadCell)',
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      description: 'Classes CSS adicionais',
      table: { type: { summary: 'string' } },
    },
  },
};

// Story do TableCell
export const TableCellStory: Story = {
  name: 'Table.Cell',
  render: () => (
    <Table.Root>
      <Table.Body>
        <Table.Row>
          <Table.Cell align="left">Alinhado à esquerda</Table.Cell>
          <Table.Cell align="center">Centralizado</Table.Cell>
          <Table.Cell align="right">Alinhado à direita</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Componente para células de dados da tabela (td)',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Conteúdo da célula',
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      description: 'Classes CSS adicionais',
      table: { type: { summary: 'string' } },
    },
  },
};

// Story do TableHeadCell
export const TableHeadCellStory: Story = {
  name: 'Table.HeadCell',
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.HeadCell width="100px">Largura fixa</Table.HeadCell>
          <Table.HeadCell width="50%">Largura percentual</Table.HeadCell>
          <Table.HeadCell align="right">Alinhado à direita</Table.HeadCell>
        </Table.Row>
      </Table.Header>
    </Table.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Componente para células do cabeçalho da tabela (th)',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Conteúdo da célula do cabeçalho',
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      description: 'Classes CSS adicionais',
      table: { type: { summary: 'string' } },
    },
  },
};

// Story completa mostrando caso de uso real
export const EmployeeTable: Story = {
  name: 'Exemplo: Tabela de Funcionários',
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.HeadCell width="60px">FOTO</Table.HeadCell>
          <Table.HeadCell>NOME</Table.HeadCell>
          <Table.HeadCell>CARGO</Table.HeadCell>
          <Table.HeadCell>DATA DE ADMISSÃO</Table.HeadCell>
          <Table.HeadCell>TELEFONE</Table.HeadCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {[
          {
            name: 'Giovana L. Arruda',
            role: 'Front-end',
            date: '12/09/2023',
            phone: '+55 (55) 55555-555',
          },
          {
            name: 'Vanessa Machado',
            role: 'Front-end',
            date: '18/10/2023',
            phone: '+55 (55) 55555-555',
          },
          {
            name: 'Juliana Borba',
            role: 'Front-end',
            date: '25/11/2023',
            phone: '+55 (55) 55555-555',
          },
        ].map((employee, index) => (
          <Table.Row
            key={index}
            onClick={() => console.log(`Clicou em ${employee.name}`)}
          >
            <Table.Cell>
              <div
                style={{
                  height: '40px',
                  width: '40px',
                  borderRadius: '50%',
                  border: '1px, solid, #000000',
                }}
              />
            </Table.Cell>
            <Table.Cell>{employee.name}</Table.Cell>
            <Table.Cell>{employee.role}</Table.Cell>
            <Table.Cell>{employee.date}</Table.Cell>
            <Table.Cell>{employee.phone}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo completo de uma tabela de funcionários similar ao mockup do teste técnico',
      },
    },
  },
};
