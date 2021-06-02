import React from 'react';
import PropTypes from 'prop-types';

import "./transaction-history.css";

const TransactionHistory = ({ id, type, amount, currency }) => (
  <tr key={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionHistory.protoTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;