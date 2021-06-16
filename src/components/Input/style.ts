import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
  backgroundColor?: string;
  color?: string;
  heigth?: string;
  with?: string | undefined;
  border?: string;
  padding?: string;
  margin?: string;
  radius?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: ${(props) => (props.backgroundColor)};
  color: ${(props) => (props.color)};
  color: #666360;

  width: ${(props) => (props.with)};

  border-radius: ${(props) => (props.radius)};
  border: ${(props) => (props.border)};

  margin: ${(props) => (props.margin)};
  
  padding: ${(props) => (props.padding)};
  
  

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
      color: ${(props) => ("#000" && props.color)};
    }
  }
  svg {
    margin-right: 16px;
    color: ${(props) => ("#000" && props.color)};
  }
`;