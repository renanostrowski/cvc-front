import React, {useCallback, useState } from 'react';
import { Button, Container, Content, Item, List, Overlay } from './style';
import {FaCaretDown, FaCaretUp} from 'react-icons/fa';

interface items {
  id: number;
  name: String;
}

interface Data {
  title?: String;
  items: {
    id: number;
    name: string;
  }[];
  multselect?: Boolean;
};

const Combobox: React.FC<Data> = ({title, items = [], multselect = false}) => {
  const [selected, setSelected] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function handleOnClick(item:items) {}

  return (
    <>
    {
      isOpened && (<Overlay onClick={() => {
        isOpened && setIsOpened(!isOpened)}
      }/>)
    }
      <Container isFocused={isFocused}>
        <Button 
        onKeyPress={() => (setIsOpened(!isOpened))} 
        onClick={() => (setIsOpened(!isOpened))}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        >
          <div className="title">
            <p className="header-title">{selected || title}</p>
          </div>
          <div className="button">
            {!isOpened ? <FaCaretDown size={20} /> : <FaCaretUp size={20}/>}
          </div>
        </Button>
          {isOpened && (
            <Content>
              <List>
                {items.map(item => (
                  <Item className="listitem" key={item.id} 
                  onClick={() => {
                      setSelected(item.name)
                      setIsOpened(false);
                    }}>
                    <span>{item.name}</span>
                  </Item>
                ))}
              </List>
            </Content>
          )}
      </Container>
    </>
)};

export default Combobox;