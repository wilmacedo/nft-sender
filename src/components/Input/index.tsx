import React, { useState } from 'react';
import Button from '../Button';
import { Container, InputContainer, Title } from './styles';

interface InputProps {
  title: string;
  onSend: (address: string) => void;
}

const Input: React.FC<InputProps> = ({ title, onSend }) => {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    if (value.length === 0) {
      setError('');
    } else if (value.length !== 62) {
      setError('Invalid address');
    }

    setAddress(value);
  };

  const handleSend = () => {
    if (error) return;

    if (address.length === 0) {
      setError(`Address cannot be empty`);
      return;
    }

    onSend(address);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <InputContainer error={!!error}>
        <input type="text" placeholder="Address" onChange={handleChange} />
        {error && <span>{error}</span>}
      </InputContainer>
      <Button name="Send" onClick={handleSend} />
    </Container>
  );
};

export default Input;
