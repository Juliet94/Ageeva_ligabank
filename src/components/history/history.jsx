import React from 'react';
import {useDispatch} from 'react-redux';
import styles from './history.module.scss';

import HistoryList from '../history-list/history-list';

import {clearHistory} from '../../store/action';

function History() {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(clearHistory());
  };

  return (
    <section className={styles.history}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          История конвертация
        </h2>
        <HistoryList />
        <button
          className={styles.btn}
          type="button"
          onClick={onButtonClick}
        >
          Очистить историю
        </button>
      </div>
    </section>
  );
}

export default History;
