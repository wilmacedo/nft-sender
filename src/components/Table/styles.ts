import styled from 'styled-components';

export const Container = styled.div`
  backdrop-filter: blur(16px) saturate(180%);

  background-color: ${props => props.theme.table.background};

  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.table.border};
`;

export const TableContent = styled.table`
  border-collapse: collapse;

  th {
    padding: 0.75rem;

    svg {
      cursor: pointer;
      color: ${props => props.theme.purple};
    }
  }

  thead {
    border-bottom: 1px solid ${props => props.theme.table.border};
    color: ${props => props.theme.white};
  }

  td {
    padding: 0.75rem;
    color: ${props => props.theme.white};

    a {
      color: ${props => props.theme.white};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 1024px) {
    display: block;
    overflow: auto;
    max-width: calc(100vw - 4rem);
  }
`;
