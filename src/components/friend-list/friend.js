import React from 'react';
import PropTypes from 'prop-types';
import defaultAva from '../../img/defaultAva.jpg';


const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className="item">
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
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