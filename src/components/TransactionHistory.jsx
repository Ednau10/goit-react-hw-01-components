import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Currency</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(transaction => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.currency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
