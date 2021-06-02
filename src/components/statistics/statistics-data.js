import React from 'react';

import StatisticsList from './statistics';

import "./statistics.css";

const Statistics = ({ title, stats }) => (
<section className="statistics">
   { title && <h2 className="">{title}</h2>}
  <ul className="statistics__list">
      {stats.map(({ id, label, percentage }) => (
        <StatisticsList
          key={id}
          label={label}
          percentage={percentage}
        />
      ))}
  </ul>
</section>
);

export default Statistics;