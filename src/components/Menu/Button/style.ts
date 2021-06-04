import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 150px;
  height: 80px;
  margin-top: 26px;
  margin-left: 3px;
  border-radius: 10px;
  background-color: #DAA520;
  padding: 16px;
  color: #312e38;

  border: 0;
  color: #312e38;
  
  font-weight: 500;
  transition: background 0.2s;

  &:hover{
    background: ${shade(0.2, '#ff9000')};
  }
`;

