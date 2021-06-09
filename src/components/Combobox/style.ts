import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
}


export const Container = styled.div<ContainerProps>`
  position: relative;
  z-index: 2;

  width: 350px;

  background-color: #232129;
  border-radius: 5px;
  border: 2px solid #232129;

  ${props => props.isFocused && 
  css`
    color: #ff9000;
    border-color: #ff9000;
  `}
`;

export const Button = styled.div<ContainerProps>`
  padding: 3px;
  background: #232129;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  border: 2px solid #232129;
  
  ${props => props.isFocused && 
  css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  transition: background 0.2s;

  &:hover{
    background: ${shade(0.2, '#232129')};
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px;
  background: #232129;
`;

export const List = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  flex: 1;
  list-style-type: none;
  cursor: pointer;
  padding: 10px;

  transition: background 0.2s;

  &:hover{
    background: ${shade(0.2, '#232129')};
  }
`;

export const Overlay = styled.div`
  position:absolute;
	top:0;
	left:0;
	z-index:0;
	width:100%;
	height:100%;
  background-color: #ffffff15;
  filter: blur(100px);
`;
