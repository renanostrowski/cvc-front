import React from 'react';

import {TableP} from './styles';

function objectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

type PrimitiveType = string | Symbol | number | boolean;

function isPrimitive(value: any): value is PrimitiveType {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol"
  );
};

type TableHeaders<T> = Record<keyof T, string>;

type CustomRenderers<T> = Partial<
  Record<keyof T, (it: T) => React.ReactNode>
>;

interface TableProps<T> {
  id: String;
  items: T[];
  headers: TableHeaders<T>;
  customRenderers?: CustomRenderers<T>;
};

function handleClick(item: any, id: String) {
  alert(item.id);
}

export default function Table<T>(props: TableProps<T>) {
  function renderRow(item: T) {
    return (
      <tr onClick={() => handleClick(item, props.id)}>
        {objectKeys(item).map((itemProperty) => {
          const customRenderer = props.customRenderers?.[itemProperty];

          if (customRenderer) {
            return <td>{customRenderer(item)}</td>;
          }

          return (
            <td>{isPrimitive(item[itemProperty]) ? item[itemProperty] : ""}</td>
          );
        })}
      </tr>
    );
  }

  return (
    <TableP>
      <thead>
        {objectValues(props.headers).map((headerValue) => (
          <th>{headerValue}</th>
        ))}
      </thead>
      <tbody>{props.items.map(renderRow)}</tbody>
    </TableP>
  );
}