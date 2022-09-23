import { PropTypes } from 'prop-types';
import { StatisticCardItem } from 'components/StatisticCardItem/StatisticCardItem';
export const StatisticCard = ({ data, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <StatisticCardItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

StatisticCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
