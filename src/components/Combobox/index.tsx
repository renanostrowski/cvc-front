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

  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;

  contBackColor?: string;
  contWidth?: string;
  contRadius?: string;
  contBorder?: string;
  contFocusColor?: string;

  buttonBackColor?: string;
  buttonBorder?: string;
  buttonFocusColor?: string;
  buttonpadding?: string;

  Contentpadding?: string;
  Contentbackground?: string;

  itemPadding?: string;
};

const Combobox: React.FC<Data> = ({title, items = [], multselect = false, ...rest}) => {
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
      <Container 
      isFocused={isFocused}
      contBackColor={rest.contBackColor}
      contWidth={rest.contWidth}
      contRadius={rest.contRadius}
      contBorder={rest.contBorder}
      contFocusColor={rest.contFocusColor}
      >
        <Button 
        onKeyPress={() => (setIsOpened(!isOpened))} 
        onClick={() => (setIsOpened(!isOpened))}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        buttonBackColor={rest.buttonBackColor}
        buttonBorder={rest.buttonBorder}
        buttonFocusColor={rest.buttonFocusColor}
        buttonpadding={rest.buttonpadding}
        >
          <div className="title">
            <p className="header-title">{selected || title}</p>
          </div>
          <div className="button">
            {!isOpened ? <FaCaretDown size={20} /> : <FaCaretUp size={20}/>}
          </div>
        </Button>
          {isOpened && (
            <Content
            Contentpadding={rest.Contentpadding}
            Contentbackground={rest.Contentbackground}
            >
              <List>
                {items.map(item => (
                  <Item 
                    itemPadding={rest.itemPadding}
                    className="listitem" 
                    key={item.id} 
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