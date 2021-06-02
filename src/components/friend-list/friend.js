import React from 'react';
import PropTypes from 'prop-types';
import defaultAva from '../../img/defaultAva.jpg';

import "./friend-list.css";

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className="friend__list-item">
    <span className={isOnline ? "friend-list__status friend__list-status-online" : "friend-list__status friend__list-status-offline"} />
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="friend__list-name">{name}</p>
  </li>
);


FriendListItem.defaultProps = {
  avatar: defaultAva,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;