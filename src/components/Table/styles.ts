import { shade } from 'polished';
import styled from 'styled-components';


export const TableP = styled.table`
  border: 1px solid #666360;
  margin-top: 20px;

  thead {
    border: 1px solid #666360;
    background: ${shade(0.2, '#312E38')};

    th {
      border: 1px solid #666360;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-right: 40px;
      padding-left: 40px;
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