import React from 'react';
import FriendListItem from './friend';
// import PropTypes from 'prop-types';

import "./friend-list.css";

const FriendList = ({ friends }) => (
  <ul className="friend__list">
    {friends.map(({ id, isOnline, avatar, name }) => (
      <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
      />
    ))}
  </ul>
);


// Statistics.defaultProps = {
// };

// Statistics.propTypes = {
// };

export default FriendList;