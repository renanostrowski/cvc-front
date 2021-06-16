import { FormHandles } from '@unform/core';
import { Form } from '@unform/web'
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import Combobox from '../../components/Combobox';
import Input from '../../components/Input';
import Menu from '../../components/Menu';
import Table from '../../components/Table';
import api from '../../services/api';
import {Container, Content, Header, Label} from './style';

const stockItems = [
  {
    scriptoid: 6,
    banco: "Oracle",
    descricao: "Alter Table",
    versao: "9.6.4",
    skip: "T",
    codigo: "asdasdasdasd"
  }
];

const headers = {
  scriptoid: "Id",
  ordem: "Ordem",
  banco: "Banco",
  descricao: "Descrição",
  versao: "Versão",
  skip: "Pular",
  codigo: "Código"
}

interface DadosType {
  scriptoid:Number;
  ordem: Number;
  banco: String;
  descricao: String;
  versao: {
    major: String,
    minor: String,
    banco: String;
  };
  skip: String;
  codigo: String;
}

interface ScriptType {
  scriptoid:Number;
  ordem: Number;
  banco: String;
  descricao: String;
  versao: String;
  skip: String;
  codigo: String;
}

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState("");
  const [scripts, setScripts] = useState<ScriptType[]>([]);
  const [dados, setDados] = useState<DadosType[]>([]);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    api.get('scripts').then(response => {
      setDados(response.data);
      setScripts(response.data);
      console.log("Scripts");
      console.log(scripts);
    });
  }, []);


  const data = [
    {id: 1, name: "React", last: "Tese"},
    {id: 1, name: "Vue", last: "Teste"},
  ]

  return (
  <>
    <Menu/>
    <Container>
      <Header>
        <Form ref={formRef} onSubmit={() => alert("Enviou")}>
          <Label>
            <p>Buscar por:</p>
            <Input 
            name="Filtro"
            icon={FiSearch}
            placeholder="Buscar"
            backgroundColor={"#232129"}
            border={"2px solid #232129"}
            color={"#666360"}
            radius={"10px"}
            padding={"16px 16px 16px 16px"}
            />
          </Label>
          <Label>
            <p>Selecione o Filtro:</p>
            <Combobox 
            title={selected || "Selecione..."} 
            items={data}
            contBackColor={"#232129"}
            contWidth={"350px"}
            contRadius={"5px"}
            contBorder={"2px solid #232129"}
            contFocusColor={"#ff9000"}
            buttonBackColor={"#232129"}
            buttonBorder={"2px solid #232129"}
            buttonFocusColor={"#ff9000"}
            buttonpadding={"5px"}
            Contentpadding={"10px"}
            Contentbackground={"#232129"}
            itemPadding={"10px"}
            />
          </Label>
        </Form>
      </Header>
      <Content>
        <Table id="id"
        padding={["0px", "40px", "0px", "40px"]}
        headers={headers}
        items={scripts}
      />
      </Content>
    </Container>
  </>
)};

export default Dashboard;