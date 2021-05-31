import React from 'react';
// import PropTypes from 'prop-types';

const Statistics = ({item, label, percentage }) => (
  <li className={item}>
    <span className={label}>{label}</span>
    <span className={percentage}> {percentage}%</span>
  </li>
);

// Statistics.defaultProps = {
// };

// Statistics.propTypes = {
// };

export default Statistics;