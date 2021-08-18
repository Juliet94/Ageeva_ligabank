import React from 'react';
import {useSelector} from 'react-redux';
import styles from './history-list.module.scss';

import HistoryItem from '../history-item/history-item';

import {getHistory} from '../../store/selectors';

function HistoryList() {
  const history = useSelector(getHistory);

  return (
    <ul className={styles.list}>
      {history.map((item) => (
        <HistoryItem key={item.id} historyItem={item} />
      ))}
    </ul>
  );
}

export default HistoryList;
