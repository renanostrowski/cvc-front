import styled from "styled-components";

import backgroundSignUpImg from '../../assets/logo-cyberlog.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  a {
    text-decoration: none;
    color: #312e38;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  
  width: 700px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundSignUpImg}) no-repeat center;
  background-size: cover;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 16px;
  }
`;
