import { PropTypes } from 'prop-types';
import { FriendListItem } from 'components/FriendsListItem/FriendListItem';
import { FriendsBoard } from 'components/FriendList/FriendsList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendsBoard className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsBoard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
