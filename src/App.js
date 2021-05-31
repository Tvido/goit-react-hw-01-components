import React from 'react';
import Profile from './components/social-profile/social-profile'
import user from './components/social-profile/user.json';
import Statistics from './components/statistics/statistics';
import statisticalData from './components/statistics/statistical-data.json';

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
};

export default App;