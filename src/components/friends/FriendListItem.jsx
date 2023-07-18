import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Status,
  Avatar,
  Name,
} from './FriendListItem.styled';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <Item>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
