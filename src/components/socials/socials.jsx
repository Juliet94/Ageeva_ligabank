import React from 'react';
import styles from './socials.module.scss';

import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import youtube from '../../assets/images/icon-youtube.svg';

function Socials() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="/">
          <span className="visually-hidden">Facebook</span>
          <img src={facebook} alt={'Иконка facebook'}/>
        </a>
      </li>
      <li className={styles.item}>
        <a href="/">
          <span className="visually-hidden">Instagram</span>
          <img src={instagram} alt={'Иконка instagram'}/>
        </a>
      </li>
      <li className={styles.item}>
        <a href="/">
          <span className="visually-hidden">Twitter</span>
          <img src={twitter} alt={'Иконка twitter'}/>
        </a>
      </li>
      <li className={styles.item}>
        <a href="/">
          <span className="visually-hidden">Youtube</span>
          <img src={youtube} alt={'Иконка youtube'}/>
        </a>
      </li>
    </ul>
  );
}

export default Socials;
