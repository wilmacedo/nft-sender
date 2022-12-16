import React from 'react';
import { Container } from './styles';

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <Container onClick={onClick}>
      <span>{name}</span>
    </Container>
  );
};

export default Button;
