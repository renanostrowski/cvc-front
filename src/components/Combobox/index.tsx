import React, {useCallback, useState } from 'react';
import { Button, Container, Content, Item } from './style';
import {FaCaretDown} from 'react-icons/fa';

interface Data {
  Key: String;
}

const Combobox: React.FC = () => {

  const [selected, setSelected] = useState("");

  const [isFocused, setIsFocused] = useState(false);

  const [isOpened, setIsOpened] = useState(false);

  const SelectFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const SelectBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const options = ["Desenvolvedores", "Scripts", "Itens Versão"];

  return (
    <Container>
      <Button 
      onClick={() => setIsOpened(!isOpened)}>
        {selected || "Selecione..."}
        <FaCaretDown size={20}/>
      </Button>
      {isOpened && (
      <Content> 
        {options.map(option => (
          <Item 
          onClick={() => {
            setSelected(option)
            setIsOpened(false)
          }}>
            {option}
          </Item>
        ))}
      </Content>
      )}
    </Container>
)};

export default Combobox;