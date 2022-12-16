import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.span`
  color: ${props => props.theme.white};
`;

interface InputContainerProps {
  error: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  input {
    padding: 0.5rem;
    width: 100%;

    backdrop-filter: blur(16px) saturate(180%);

    background-color: ${props =>
      props.error ? props.theme.darkRed : props.theme.table.background};

    border: 1px solid
      ${props => (props.error ? props.theme.red : props.theme.table.border)};
    border-radius: 0.5rem;

    color: ${props => props.theme.white};
  }

  span {
    color: ${props => props.theme.lightRed};
  }
`;
