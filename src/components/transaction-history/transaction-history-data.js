import React from 'react';
import TransactionHistory from './transaction-history';
import PropTypes from 'prop-types';

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

TransactionList.defaultProps = {
  amount: "---",
  };

TransactionList.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,

};

export default TransactionList;