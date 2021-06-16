import React, {ButtonHTMLAttributes} from 'react';
import { Container } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Personaliza extends ButtonProps {
  backgroundColor?: string;
  color?: string;
  heigth?: string;
  largura?: string;
  border?: string;
  padding?: string;
  margin?: string;
  radius?: string;
}

const Button: React.FC <Personaliza> = (props) => (
  <Container 
  type="submit"
  with={props.largura}
  backgroundColor={props.backgroundColor}
  border={props.border}
  radius={props.radius}
  padding={props.padding}
  margin={props.margin}
  >
    {props.children}
  </Container>
);

export default Button;