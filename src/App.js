import React from 'react';

import "./App.css";

import Profile from './components/profile/profile'
import Statistics from './components/statistics/statistics-data';
import FriendList from './components/friend-list/friend-list';
import TransactionHistory from './components/transaction-history/transaction-history-data';

import user from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friend-list/friends.json';
import transactions from './components/transaction-history/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}
        stats={user.stats}

      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;