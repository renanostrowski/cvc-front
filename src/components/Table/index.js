import React from 'react';

const Row = ({record}) => {
  const keys = Object.keys(record);
  return (
    keys.map(key => <td key={key}>{record[key]}</td>)
  )
}

const Table = ({data}) => {
  const keys = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {
            keys.map(key => <th key={key}>{key}</th>)
          }
        </tr>
      </thead>
      <tbody>
       {keys.map(record => <Row record={record} />)}
      </tbody>
    </table>
)};


export default Table;