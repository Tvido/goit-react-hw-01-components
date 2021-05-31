import React from 'react';
import Profile from './components/social-profile/social-profile'
import user from './components/social-profile/user.json';
import Statistics from './components/statistics/statistics-data';
import statisticalData from './components/statistics/statistical-data.json';
import FriendList from './components/friend-list/friend-list';
import friends from './components/friend-list/friends.json';

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

      <FriendList friends={friends} />
    </div>
  );
};

export default App;