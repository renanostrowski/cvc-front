import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from '../Input/style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, width ,...rest }) => {

  const [isFocused, setIsFocused] = useState(false);

  const InputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const InputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);


  return (
  <Container isFocused={isFocused} isFilled={true} isErrored={false}>
    {Icon && <Icon size={20} />}
    <input
      onFocus={InputFocus}
      onBlur={InputBlur}
      {...rest}
    />
  </Container>
)};

export default Input;