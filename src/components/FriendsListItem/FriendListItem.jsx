import { PropTypes } from 'prop-types';
import { FriendsCard, Status } from 'components/FriendList/FriendsList.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsCard>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendsCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
