import { shade } from 'polished';
import styled, { css } from 'styled-components';


interface ContentProps {
  isOpen?: Boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  padding-bottom: 30px;
  width: 90%;

  box-shadow: 0 4px 8px 0 rgba(249, 144, 0, 0.2), 0 6px 20px 0 rgba(249, 144, 0, 0.19);
  text-align: center;
  border-radius: 0px 0 30px 30px;

  margin-top: -120px;
  transition: all 0.5s ease;
  

  ${props => props.isOpen && 
  css`
    margin-top: 0px;
  `}
`;

export const ContainerImg = styled.div<ContentProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 150px;
  margin-top: 30px;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${props => props.isOpen &&
    css`
      display: none;
    `
  }
  
`;

export const ContainerSeta = styled.div<ContentProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 20px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  
  margin-top: 5px;

  ${props => props.isOpen &&
    css`
      transform: rotate(180deg);
      width: 25px;
      opacity: .2;
      margin-top: 8px;
    `
  }
`;
