import { PropTypes } from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';

import {
  Table,
  TableHead,
  TableHeadEl,
  TableHeadElCard,
  TableBody,
} from 'components/TransactionHistory/TransactionsHistory.styled';

export const TransactionTable = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadEl>
          <TableHeadElCard>Type</TableHeadElCard>
          <TableHeadElCard>Amount</TableHeadElCard>
          <TableHeadElCard>Currency</TableHeadElCard>
        </TableHeadEl>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TableBody>
    </Table>
  );
};

TransactionTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
