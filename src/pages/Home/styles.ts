import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  width: 50%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props =>
    `radial-gradient(circle, ${transparentize(
      0.8,
      props.theme.lightPurple,
    )} 0%, ${props.theme.darkPurple} 70%)`};

  @media (max-width: 1024px) {
    width: 100vw;
    height: 30%;
  }
`;

export const LogoContent = styled.div`
  margin: auto 10rem;

  max-width: 10rem;

  display: flex;
  flex-direction: column;

  img {
    height: auto;
    width: 10rem;
  }
`;

interface BlurProps {
  hasConnection: boolean;
}

export const BlurContent = styled.div<BlurProps>`
  display: flex;

  flex-direction: column;
  gap: 2rem;

  ${props =>
    !props.hasConnection &&
    css`
      filter: blur(2px) brightness(0.5);
    `}
`;

export const ActionContainer = styled.div`
  display: flex;
  position: relative;
`;

export const ConnectContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: white;
  }
`;

export const HashContainer = styled.div`
  span {
    color: ${props => props.theme.white};
    opacity: 0.7;
  }

  p {
    color: ${props => props.theme.white};

    a {
      color: ${props => props.theme.white};
      text-decoration: underline;
    }
  }
`;
