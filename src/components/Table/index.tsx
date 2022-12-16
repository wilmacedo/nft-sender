import React from 'react';
import { Container, TableContent } from './styles';

interface TableProps {
  children?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <Container>
      <TableContent>{children}</TableContent>
    </Container>
  );
};

export default Table;
