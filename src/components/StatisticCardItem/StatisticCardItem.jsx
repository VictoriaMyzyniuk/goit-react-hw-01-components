import { PropTypes } from 'prop-types';
export const StatisticCardItem = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage"> {percentage}%</span>
    </li>
  );
};

StatisticCardItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
