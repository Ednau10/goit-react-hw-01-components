import styled from 'styled-components';


export const Table = styled.table`
  margin: 10px;
  max-width: 320px;
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #00bcd4; /* Color de fondo del encabezado */
  color: white; /* Color del texto */
  font-weight: bold;
  // text-transform: uppercase; /* Transformación de texto a mayúsculas en las celdas de la tabla */
`;

export const TableBody = styled.tbody`
color: gray; /* Color del texto de las celdas de la tabla */
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f5f5f5; /* Color de fondo de las filas pares */
  }
`;

export const TableCell = styled.td`
  padding: 8px;
`;
