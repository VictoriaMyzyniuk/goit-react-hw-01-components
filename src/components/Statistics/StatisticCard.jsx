import { PropTypes } from 'prop-types';
import { StatisticCardItem } from 'components/StatisticCardItem/StatisticCardItem';
import {
  StatisticWrapper,
  StatisticList,
  SectionHeader,
} from 'components/Statistics/Statistics.styled';
export const StatisticCard = ({ stats, title }) => {
  return (
    <StatisticWrapper>
      {title && <SectionHeader>{title}</SectionHeader>}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticCardItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticList>
    </StatisticWrapper>
  );
};

StatisticCard.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
