import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

import {Currency} from '../../const';

function Input({currency, onCurrencyChange, quantity, onQuantityChange}) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="number"
        placeholder="1000"
        min="0"
        value={quantity}
        onChange={onQuantityChange}
      />
      <select
        className={styles.select}
        value={currency}
        onChange={onCurrencyChange}
      >
        <option value={Currency.RUB}>{Currency.RUB}</option>
        <option value={Currency.USD}>{Currency.USD}</option>
        <option value={Currency.EUR}>{Currency.EUR}</option>
        <option value={Currency.GBP}>{Currency.GBP}</option>
        <option value={Currency.CNY}>{Currency.CNY}</option>
      </select>
    </div>
  );
}

Input.propTypes = {
  currency: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  onCurrencyChange: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default Input;
