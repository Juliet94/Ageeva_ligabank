import React from 'react';
import PropTypes from 'prop-types';
import styles from './history-item.module.scss';

function HistoryItem({historyItem}) {
  const {date, from, to} = historyItem;

  return (
    <li className={styles.item}>
      <span>
        {date}
      </span>
      <span className={styles.text}>
        {from}
      </span>
      <span>
        {to}
      </span>
    </li>
  );
}

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    date: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
};

export default HistoryItem;
