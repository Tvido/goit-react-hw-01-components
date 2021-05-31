import React from 'react';
// import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name}) => (
  <li class="item">
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt="" width="48" />
    <p class="name">{name}</p>
  </li>
);


// Statistics.defaultProps = {
// };

// Statistics.propTypes = {
// };

export default FriendListItem;