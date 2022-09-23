import { PropTypes } from 'prop-types';
import { TableElInfo } from 'components/TransactionHistory/TransactionsHistory.styled';
export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <TableElInfo>{type}</TableElInfo>
      <TableElInfo>{amount}</TableElInfo>
      <TableElInfo>{currency}</TableElInfo>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
