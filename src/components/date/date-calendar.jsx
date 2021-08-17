import React from 'react';
import styles from './date-calendar.module.scss';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';

const WEEK = 7;

function DateCalendar({date, onDateChange}) {

  return (
    <div>
      <Flatpickr
        className={styles.date}
        data-disable-time
        value={date}
        options={{
          dateFormat: 'j.n.Y',
          onChange: onDateChange,
          maxDate: new Date(),
          minDate: new Date().setDate((new Date()).getDate() - WEEK),
        }}
      />
    </div>
  );
}

export default DateCalendar;
