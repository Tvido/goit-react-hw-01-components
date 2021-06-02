import React from 'react';
import PropTypes from 'prop-types';
import defaultAva from '../../img/defaultAva.jpg';

import "./social-profile.css"

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => {
  return (
    <div className="profile">
      <div className="profile__description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="profile__avatar"
        />
        <p className="profile__name">{name}</p>
        <p className="profile__tag">@{tag}</p>
        <p className="profile__location">{location}</p>
      </div>

      <ul className="profile__stats">
        <li className="profile__stats-item">
          <span className="profile__stats-label">Followers</span>
          <span className="profile__stats-quantity">{followers}</span>
        </li>
        <li className="profile__stats-item">
          <span className="profile__stats-label">Views</span>
          <span className="profile__stats-quantity">{views}</span>
        </li>
        <li className="profile__stats-item">
          <span className="profile__stats-label">Likes</span>
          <span className="profile__stats-quantity">{likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.defaultProps = {
  avatar: defaultAva,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;