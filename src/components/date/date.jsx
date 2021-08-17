import React from 'react';
import styles from './date.module.scss';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';

function Date() {
  return (
    <div>
      <Flatpickr
        className={styles.date}
        data-disable-time
        options={{
          dateFormat: 'j.n.Y',
        }}
      />
    </div>
  );
}

export default Date;
