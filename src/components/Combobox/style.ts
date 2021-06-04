import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #232129;
  border-radius: 5px;
  border: 2px solid #232129;



  ${props => props.isFocused && 
  css`
    color: #ff9000;
    border-color: #ff9000;
  `}
`;

export const Button = styled.div`
  padding: 10px;
  background: #232129;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

export const Content = styled.div`
  margin-top: 5px;
  padding: 15px;
  background: #232129;
  box-shadow: 3px 3px 10px 6px rgba(249, 144, 0, 0.2);
`;

export const Item = styled.div`
  cursor: pointer;
  padding: 10px;
`;