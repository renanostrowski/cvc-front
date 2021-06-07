import React, { useState } from 'react';
import Combobox from '../../components/Combobox';
import InputForm from '../../components/InputForm';
import Menu from '../../components/Menu';
import {Content, Header, Label} from './style';

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState("");

  const data = [
    {id: 1, name: "React"},
    {id: 1, name: "Vue"},
  ]

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
        <Combobox title={selected || "Selecione..."} items={data}/>
      </Label>
    </Header>
    <Content>
    </Content>
  </div>
)};

export default Dashboard;