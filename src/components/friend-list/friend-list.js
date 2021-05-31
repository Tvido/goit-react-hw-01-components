import React from 'react';
import FriendListItem from './friend';
// import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
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