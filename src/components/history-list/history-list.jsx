import React from 'react';
import styles from './history-list.module.scss';

function HistoryList() {
  return (
    <ul className={styles.list}>
      <li>
        <span>
          25.11.2020
        </span>
        <span>
          1000 RUB
        </span>
        <span>
          13,1234 USD
        </span>
      </li>
    </ul>
  );
}

export default HistoryList;
