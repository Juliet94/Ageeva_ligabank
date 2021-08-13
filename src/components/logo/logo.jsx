import React from 'react';
import styles from './logo.module.scss';
import logo from '../../assets/images/logo.svg';

function Logo() {
  return (
    <a className={styles.logo} href="/">
      <img src={logo} alt="Лига Банк логотип"/>
    </a>
  );
}

export default Logo;
