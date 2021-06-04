import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.button`
  width: 350px;
  margin-top: 26px;
  border-radius: 10px;
  background-color: #ff9000;
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

