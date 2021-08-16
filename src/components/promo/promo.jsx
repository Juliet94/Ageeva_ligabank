import React from 'react';
import styles from './promo.module.scss';

function Promo() {
  return (
    <div className={styles.promo}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          Лига Банк
        </h2>
        <p className={styles.slogan}>
          Кредиты на любой случай
        </p>
        <a className={styles.link} href="/">
          Рассчитать кредит
        </a>
      </div>
    </div>
  );
}

export default Promo;
