import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './converter.module.scss';
import Input from '../input/input';
import DateCalendar from '../date/date-calendar';
import {Currency} from '../../const';
import {getRates} from '../../store/selectors';
import {fetchRates} from '../../store/api-actions';
import dayjs from 'dayjs';
import {addHistoryItem} from '../../store/action';

const FIXED_VALUE = 3;

function Converter() {
  const [date, setDate] = useState(new Date());
  const [currencyFrom, setCurrencyFrom] = useState(Currency.RUB);
  const [currencyTo, setCurrencyTo] = useState(Currency.USD);
  const [quantityFrom, setQuantityFrom] = useState(0);
  const [quantityTo, setQuantityTo] = useState(0);

  const rates = useSelector(getRates);
  const dispatch = useDispatch();

  const getAdaptedValue = (value) => value.toFixed(FIXED_VALUE);

  const onDateChange = (checkedDate) => {
    setDate(checkedDate);
    dispatch(fetchRates(dayjs(checkedDate).format('YYYY-MM-DD')));
    setQuantityTo(getAdaptedValue((+quantityFrom / rates[currencyFrom]) * rates[currencyTo]));
  };

  const onCurrencyFromChange = (evt) => {
    setCurrencyFrom(evt.target.value);
    setQuantityTo(getAdaptedValue((quantityFrom / rates[evt.target.value]) * rates[currencyTo]));
  };
  const onCurrencyToChange = (evt) => {
    setCurrencyTo(evt.target.value);
    setQuantityTo(getAdaptedValue((quantityFrom / rates[currencyFrom]) * rates[evt.target.value]));
  };
  const onQuantityFromChange = (evt) => {
    setQuantityFrom(evt.target.value);
    setQuantityTo(getAdaptedValue((evt.target.value / rates[currencyFrom]) * rates[currencyTo]));
  };
  const onQuantityToChange = (evt) => {
    setQuantityTo(evt.target.value);
    setQuantityFrom(getAdaptedValue((evt.target.value * rates[currencyFrom]) / rates[currencyTo]));
  };

  let id = 0;
  const onButtonClick = (evt) => {
    evt.preventDefault();

    dispatch(addHistoryItem({
      id: id++,
      date: dayjs(date).format('DD.MM.YYYY'),
      from: `${quantityFrom} ${currencyFrom}`,
      to: `${quantityTo} ${currencyTo}`,
    }));
  };

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
            <Input currency={currencyFrom} onCurrencyChange={onCurrencyFromChange} quantity={quantityFrom} onQuantityChange={onQuantityFromChange} />
          </div>
          <div>
            <p className={styles.text}>
              Хочу приобрести
            </p>
            <Input currency={currencyTo} onCurrencyChange={onCurrencyToChange} quantity={quantityTo} onQuantityChange={onQuantityToChange} />
          </div>
          <DateCalendar date={date} onDateChange={onDateChange} />
          <div className={styles.button_wrapper}>
            <button
              className={styles.btn}
              type="button"
              onClick={onButtonClick}
              disabled={!quantityFrom || !quantityTo}
            >
              Сохранить результат
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Converter;
