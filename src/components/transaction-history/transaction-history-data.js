import React from 'react';
import TransactionHistory from './transaction-history';

import "./transaction-history.css";

const TransactionList = ({ items }) => (
  <table className="transaction__history">
    <thead className="transaction__head">
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistory
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);

export default TransactionList;