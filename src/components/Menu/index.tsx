import React, { useState } from 'react';
import {FaDev, FaSitemap, FaCodeBranch, FaFileDownload} from 'react-icons/fa';
import {FiCode} from 'react-icons/fi';

import Seta from '../../assets/seta.png';
import Logo from '../../assets/seta2.png';
import Button from './Button';
import { Container, ContainerImg, ContainerSeta, Content } from './styles';

const MenuDown: React.FC = () => { 
  
  const [open, setOpen] = useState(false);

  return (
  <>
    <Container>
      <Content  isOpen={open}>
        <Button>
          <FaDev size={36}/>
          Desenvolvedor
        </Button>
        <Button>
          <FiCode size={36}/>
          Script
        </Button>
        <Button>
          <FaSitemap size={36}/>
          Itens Versão
        </Button>
        <Button>
          <FaCodeBranch size={36}/>
          Versões
        </Button>
        <Button>
          <FaFileDownload size={36}/>
          Gerar CUP
        </Button>
      </Content>
      <ContainerImg isOpen={open}>
        <img src={Logo} alt="Logo" onClick={() => setOpen(!open)}/>
      </ContainerImg>
      <ContainerSeta isOpen={open}>
        <img src={Seta} alt="seta" onClick={() => setOpen(!open)}/>
      </ContainerSeta>
    </Container>
  </> 
)};

export default MenuDown;