import React, { useState } from 'react';
import Combobox from '../../components/Combobox';
import Input from '../../components/Input';
import InputForm from '../../components/InputForm';
import Menu from '../../components/Menu';
import Table from '../../components/Table';
import {Content, Header, Label} from './style';

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState("");

  const data = [
    {id: 1, name: "Renan", last: "Ostrowski"}
  ];

  return (
  <div>
    <Menu/>
    <Header>
      <Label>
        <p>Buscar por:</p>
        <InputForm name="Filtro"/>
      </Label>
      <Label>
        <p>Selecione o Filtro:</p>
        <Combobox/>
      </Label>
    </Header>
    <Content>
      <Table data={data}/>
    </Content>
  </div>
)};

export default Dashboard;