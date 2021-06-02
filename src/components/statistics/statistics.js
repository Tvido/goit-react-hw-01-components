import React from 'react';
import PropTypes from 'prop-types';

import "./statistics.css";

const StatisticsList = ({ item, label, percentage }) => (
  <li className={"statistics__item"}>
    <span className={"statistics__label"}>{label}</span>
    <span className={"statistics__percentage"}> {percentage}%</span>
  </li>
);

StatisticsList.propTypes = {
  item: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsList;