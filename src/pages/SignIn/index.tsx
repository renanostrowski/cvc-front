import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import  Input  from '../../components/Input';

import { Content, Background, Container, AnimationContainer} from './style';


const Signin = () => {
  const history = useHistory();

  function handleLogin () {
    alert("dasdasd");
  }



  return(
    <Container>
      <AnimationContainer>
        <Content>
          <form onSubmit={handleLogin}>
            <h1>Faça seu login</h1>
            <Input 
            name="email" 
            icon={FiMail}
            placeholder="Nome ou E-mail"/>
            <Input 
            name="senha" 
            icon={FiLock}
            placeholder="Senha"
            />
            <Button type="submit"><Link to={"/dashboard"}>Entrar</Link></Button>
          </form>
        </Content>
      </AnimationContainer>
      <Background />
    </Container>
)};

export default Signin;