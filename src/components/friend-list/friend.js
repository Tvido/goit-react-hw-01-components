import React from 'react';
// import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name}) => (
  <li className="item">
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </li>
);


// Statistics.defaultProps = {
// };

// Statistics.propTypes = {
// };

export default FriendListItem;