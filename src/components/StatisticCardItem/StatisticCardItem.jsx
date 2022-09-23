import { PropTypes } from 'prop-types';
import {
  StatItem,
  LabelEl,
  PercentEl,
} from 'components/Statistics/Statistics.styled';
export const StatisticCardItem = ({ label, percentage }) => {
  return (
    <StatItem>
      <LabelEl>{label}</LabelEl>
      <PercentEl> {percentage}%</PercentEl>
    </StatItem>
  );
};

StatisticCardItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
