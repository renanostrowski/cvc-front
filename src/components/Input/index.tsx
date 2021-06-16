import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from '../Input/style';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  backgroundColor?: string;
  color?: string;
  heigth?: string;
  largura?: string;
  border?: string;
  padding?: string;
  margin?: string;
  radius?: string;
} 

const Input: React.FC<InputProps> = ({icon: Icon, name, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const [isFocused, setIsFocused] = useState(false);

  const InputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const InputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);


  return (
  <Container 
  isFocused={isFocused} 
  isFilled={true} 
  isErrored={false}
  with={rest.largura} 
  backgroundColor={rest.backgroundColor}
  border={rest.border}
  radius={rest.radius}
  padding={rest.padding}
  margin={rest.margin}
  >
    {Icon && <Icon size={20} />}
    <input
      onFocus={InputFocus}
      onBlur={InputBlur}
      ref={inputRef}
      {...rest}
    />
  </Container>
)};

export default Input;