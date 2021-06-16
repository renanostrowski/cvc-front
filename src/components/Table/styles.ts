import { shade } from 'polished';
import styled from 'styled-components';

interface TableProps {
  padding?: string[];
  margin?: string[];
  heigth?: string;
  width?: string;
}


export const TableP = styled.table<TableProps>`
  border: 1px solid #666360;
  margin-top: 20px;
  margin-top: ${(props) => (props.margin && props.margin[0])};
  margin-right: ${(props) => (props.margin && props.margin[1])};
  margin-bottom: ${(props) => (props.margin && props.margin[2])};
  margin-left: ${(props) => (props.margin && props.margin[3])};

  thead {
    border: 1px solid #666360;
    background: ${shade(0.2, '#312E38')};

    th {
      border: 1px solid #666360;
      padding-top: ${(props) => (props.padding && props.padding[0])};
      padding-right: ${(props) => (props.padding && props.padding[1])};
      padding-bottom: ${(props) => (props.padding && props.padding[2])};
      padding-left: ${(props) => (props.padding && props.padding[3])};
      
      width: ${(props) => (props.width)};
      height: ${(props) => (props.heigth)};
    }
  }

  tbody {
    text-align: center;
    padding: 5px;
    border: 1px solid #666360;
    
    tr {
      background: ${shade(-0.2, '#312E38')};

      :hover {
        cursor: pointer;
        background: ${shade(0.2, '#312E38')};
      }
    }
  }
`;