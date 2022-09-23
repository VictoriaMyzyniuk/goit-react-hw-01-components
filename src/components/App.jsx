import { UserProfile } from 'components/Profile/UserProfile';
import user from 'components/Profile/user.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import { StatisticCard } from 'components/Statistics/StatisticCard';
import data from 'components/Statistics/data.json';
export const App = () => {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticCard data={data} title="Upload Stats" />
      <FriendList friends={friends} />
    </div>
  );
};
