import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef, useState } from 'react';
import {FiMail, FiLock } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import  Input  from '../../components/Input';
import api from '../../services/api';

import { Content, Background, Container, AnimationContainer} from './style';

interface FormProps {
  email: string;
  password: string;
}

const Signin = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const [users, setUsers] = useState([]);

  const handleSubmit = useCallback(
    async (data: FormProps) => {
      await api.get('devs').then(response => {
        setUsers(response.data);
      });

      console.log(users);
      history.push("/dashboard");
    },
    [],
  );

  return(
    <Container>
      <AnimationContainer>
        <Content>
          <h1>Faça seu login</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
          <Input 
          name="email" 
          icon={FiMail}
          placeholder="Nome ou E-mail"
          largura={"350px"} 
          backgroundColor={"#232129"}
          border={"2px solid #232129"}
          radius={"10px"}
          padding={"16px 16px 16px 16px"}
          margin={"8px 0px 0px 0px"}
          />
          <Input 
          name="senha" 
          icon={FiLock}
          placeholder="Senha"
          largura={"350px"} 
          backgroundColor={"#232129"}
          border={"2px solid #232129"}
          radius={"10px"}
          padding={"16px 16px 16px 16px"}
          margin={"8px 0px 0px 0px"}
          />
          <Button 
          type="submit"
          largura={"350px"} 
          backgroundColor={"#ff9000"}
          border={"0"}
          radius={"10px"}
          padding={"16px 16px 16px 16px"}
          margin={"8px 0px 0px 0px"}
          >Entrar</Button>
          </Form>
        </Content>
      </AnimationContainer>
      <Background />
    </Container>
)};

export default Signin;