import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from '.';

describe('Table component', () => {
  it('renders table with header and body', () => {
    render(
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell>Nome</Table.HeadCell>
            <Table.HeadCell>Idade</Table.HeadCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Felipe</Table.Cell>
            <Table.Cell>30</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    );

    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('Idade')).toBeInTheDocument();

    expect(screen.getByText('Felipe')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });
});
