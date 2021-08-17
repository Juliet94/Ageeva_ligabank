import React from 'react';
import styles from './input.module.scss';
import {Currency} from '../../const';

function Input() {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="number"
        placeholder="1000"
        min="0"
      />
      <select className={styles.select}>
        <option value={Currency.RUB}>{Currency.RUB}</option>
        <option value={Currency.USD}>{Currency.USD}</option>
        <option value={Currency.EUR}>{Currency.EUR}</option>
        <option value={Currency.GBP}>{Currency.GBP}</option>
        <option value={Currency.CNY}>{Currency.CNY}</option>
      </select>
    </div>
  );
}

export default Input;
