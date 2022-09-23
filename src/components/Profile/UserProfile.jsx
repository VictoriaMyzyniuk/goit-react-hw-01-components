import { PropTypes } from 'prop-types';
import {
  ProfileCard,
  Wrapper,
  Img,
  StatsList,
  StatsItem,
  GeneralInfo,
  StatsInfo,
} from 'components/Profile/UserProfile.styled';
export const UserProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Wrapper>
        <Img src={avatar} alt="User avatar" />
        <GeneralInfo>{username}</GeneralInfo>
        <GeneralInfo>@{tag}</GeneralInfo>
        <GeneralInfo>{location}</GeneralInfo>
      </Wrapper>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <StatsInfo> {stats.followers}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsInfo> {stats.views}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsInfo> {stats.likes}</StatsInfo>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
