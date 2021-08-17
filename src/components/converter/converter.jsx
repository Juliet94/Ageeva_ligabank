import React from 'react';
import styles from './converter.module.scss';
import Input from '../input/input';
import Date from '../date/date';

function Converter() {
  return (
    <section className={styles.converter}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          Конвертер валют
        </h2>
        <form className={styles.form}>
          <div>
            <p className={styles.text}>
              У меня есть
            </p>
            <Input />
          </div>
          <div>
            <p className={styles.text}>
              Хочу приобрести
            </p>
            <Input />
          </div>
          <Date />
          <div className={styles.button_wrapper}>
            <button className={styles.btn}>
              Сохранить результат
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Converter;
