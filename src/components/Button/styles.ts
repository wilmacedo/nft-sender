import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.75rem 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.purple};

  border-radius: 0.5rem;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    filter: brightness(1.2);
  }

  span {
    color: ${props => props.theme.white};
  }
`;
