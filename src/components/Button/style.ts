import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  heigth?: string;
  with?: string;
  border?: string;
  padding?: string;
  margin?: string;
  radius?: string;
  fontWeight?: string;
}

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) => (props.backgroundColor)};
  color: ${(props) => (props.color)};

  width: ${(props) => (props.with)};

  border-radius: ${(props) => (props.radius)};
  border: ${(props) => (props.border)};

  
  font-weight: ${(props) => (props.fontWeight)};

  margin: ${(props) => (props.margin)};
  padding: ${(props) => (props.padding && props.padding)};

  transition: background 0.2s;


  &:hover{ 
    filter: brightness(70%);
  }
`;
