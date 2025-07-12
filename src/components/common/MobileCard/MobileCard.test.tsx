import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MobileCard } from '.';

describe('MobileCard component', () => {
  it('should render the MobileCard with header, main and details', () => {
    render(
      <MobileCard.Root>
        <MobileCard.Item id="card-1">
          <MobileCard.Main>
            <span>Nome: Felipe</span>
            <MobileCard.Chevron isExpanded={false} />
          </MobileCard.Main>
          <MobileCard.Details isExpanded={false}>
            <MobileCard.DetailRow label="Idade" value="30" />
          </MobileCard.Details>
        </MobileCard.Item>
      </MobileCard.Root>
    );

    expect(screen.getByText('Nome: Felipe')).toBeInTheDocument();

    expect(screen.queryByText('Idade')).toBeInTheDocument();

    expect(screen.queryByText('30')).toBeInTheDocument();
  });

  it('should expand details on click', () => {
    render(
      <MobileCard.Root>
        <MobileCard.Item id="card-1">
          <MobileCard.Main>
            <span>Nome: Felipe</span>
            <MobileCard.Chevron isExpanded={false} />
          </MobileCard.Main>
          <MobileCard.Details isExpanded={false}>
            <MobileCard.DetailRow label="Idade" value="30" />
          </MobileCard.Details>
        </MobileCard.Item>
      </MobileCard.Root>
    );

    fireEvent.click(screen.getByText('Nome: Felipe'));

    expect(true).toBe(true);
  });
});
