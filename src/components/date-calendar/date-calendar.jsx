import React from 'react';
import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';
import styles from './date-calendar.module.scss';

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

DateCalendar.propTypes = {
  date: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DateCalendar;
