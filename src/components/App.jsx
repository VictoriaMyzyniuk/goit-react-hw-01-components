import { UserProfile } from 'components/Profile/UserProfile';
import user from 'components/Profile/user.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import { StatisticCard } from 'components/Statistics/StatisticCard';
import data from 'components/Statistics/data.json';
import { TransactionTable } from 'components/TransactionHistory/TransactionTable';
import transactions from 'components/TransactionHistory/transactions.json';
import { Container } from 'components/App.styled';
export const App = () => {
  return (
    <Container>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticCard stats={data} title="Upload Stats" />
      <FriendList friends={friends} />
      <TransactionTable items={transactions} />
    </Container>
  );
};
