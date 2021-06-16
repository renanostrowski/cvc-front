import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface Props {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;

  contBackColor?: string;
  contWidth?: string;
  contRadius?: string;
  contBorder?: string;
  contFocusColor?: string;

  buttonBackColor?: string;
  buttonBorder?: string;
  buttonFocusColor?: string;
  buttonpadding?: string;

  Contentpadding?: string;
  Contentbackground?: string;

  itemPadding?: string;
}


export const Container = styled.div<Props>`
  position: relative;
  z-index: 2;

  width: ${(props) => (props.contWidth)};

  background-color: ${(props) => (props.contBackColor)};
  border-radius: ${(props) => (props.contRadius)};
  border: ${(props) => (props.contBorder)};

  ${props => props.isFocused && 
  css<Props>`
    color: ${(props) => (props.contFocusColor)};
    border-color: ${(props) => (props.contFocusColor)};
  `}
`;

export const Button = styled.div<Props>`
  padding: ${(props) => (props.buttonpadding)};
  background: ${(props) => (props.buttonBackColor)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  border: 2px solid #232129;
  
  ${props => props.isFocused && 
  css<Props>`
    color: ${(props) => (props.buttonFocusColor)};
    border-color: ${(props) => (props.buttonFocusColor)};
  `}

  transition: background 0.2s;

  &:hover{
    filter: brightness(70%);
  }
`;

export const Content = styled.div<Props>`
  position: absolute;
  width: 100%;
  padding: ${(props) => (props.Contentpadding)};
  background: ${(props) => (props.Contentbackground)};
`;

export const List = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Item = styled.li<Props>`
  display: flex;
  flex: 1;
  list-style-type: none;
  cursor: pointer;
  padding: ${(props) => (props.itemPadding)};

  transition: background 0.2s;

  &:hover{
    filter: brightness(70%);
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
