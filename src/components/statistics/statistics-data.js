import React from 'react';

import StatisticsList from './statistics';

const Statistics = ({ title, stats }) => (
<section class="statistics">
   { title && <h2 className="">{title}</h2>}
  <ul class="stat-list">
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