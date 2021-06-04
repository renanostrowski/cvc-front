import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Button from '../../components/Button';
import  Input  from '../../components/Input';

import { Content, Background, Container, AnimationContainer} from './style';


const Signin = () => (
    <Container>
      <AnimationContainer>
        <Content>
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
          <Button type="submit">Entrar</Button>
        </Content>
      </AnimationContainer>
      <Background />
    </Container>
);

export default Signin;