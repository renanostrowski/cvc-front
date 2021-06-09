import React, { useState } from 'react';
import Combobox from '../../components/Combobox';
import InputForm from '../../components/InputForm';
import Menu from '../../components/Menu';
import Table from '../../components/Table';
import {Container, Content, Header, Label} from './style';

const stockItems = [
  {
    id: 1,
    descricao: "Alter Table",
    banco: "Oracle",
    skip: "T",
    codigo: "asdasdasdasd"
  },
  {
    id: 2,
    descricao: "Alter Table",
    banco: "Oracle",
    skip: "T",
    codigo: "asdasdasdasd"
  },
  {
    id: 3,
    descricao: "Alter Table",
    banco: "Oracle",
    skip: "T",
    codigo: "asdasdasdasd"
  },
  {
    id: 4,
    descricao: "Alter Table",
    banco: "Oracle",
    skip: "T",
    codigo: "asdasdasdasd"
  },
  {
    id: 5,
    descricao: "Alter Table",
    banco: "Oracle",
    skip: "T",
    codigo: "asdasdasdasd"
  },
  {
    id: 6,
    descricao: "Alter Table",
    banco: "Oracle",
    skip: "T",
    codigo: "asdasdasdasd"
  }
];

const headers = {
  id: "Id",
  descricao: "Descrição",
  banco: "Banco",
  skip: "Pular",
  codigo: "Código"
}

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState("");

  const data = [
    {id: 1, name: "React", last: "Teste"},
    {id: 1, name: "Vue", last: "Teste"},
  ]

  return (
  <>
    <Menu/>
    <Container>
      <Header>
        <Label>
          <p>Buscar por:</p>
          <InputForm name="Filtro"/>
        </Label>
        <Label>
          <p>Selecione o Filtro:</p>
          <Combobox title={selected || "Selecione..."} items={data}/>
        </Label>
      </Header>
      <Content>
        <Table id="ordem"
        headers={headers}
        items={stockItems}
      />
      </Content>
    </Container>
  </>
)};

export default Dashboard;