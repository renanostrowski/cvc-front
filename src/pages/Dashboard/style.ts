import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 50%;

  p {
    margin: 8px;
  }
`;

export const Header = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-left: 15px;
`;

export const Label = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  margin-left: 8px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-left: 20px;
  
`;