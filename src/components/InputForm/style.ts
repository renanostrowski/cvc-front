import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #232129;
  border-radius: 5px;
  padding: 13px;
  border: 2px solid #232129;
  color: #666360;

  margin-left: 8px;
  ${props => props.isFocused && 
  css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  input {
    flex: 1;
    width: 100%;
    background: transparent;
    border: 0;
    color: #f4ede8;
  }

  & + div {
    margin-top: 8px;
  }


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;