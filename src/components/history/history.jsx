import React from 'react';
import styles from './history.module.scss';
import HistoryList from '../history-list/history-list';

function History() {
  return (
    <section className={styles.history}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          История конвертация
        </h2>
        <HistoryList />
        <button className={styles.btn}>
          Очистить историю
        </button>
      </div>
    </section>
  );
}

export default History;
