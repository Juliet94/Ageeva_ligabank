import React from 'react';
import PropTypes from 'prop-types';
import styles from './site-menu.module.scss';

function SiteMenu({className, isFooter = false}) {

  return (
    <ul className={`${styles.site_list} ${className}`}>
      <li className={styles.menu_item}>
        <a href="/">
            Услуги
        </a>
      </li>
      <li className={styles.menu_item}>
        <a href="/">
          Рассчитать кредит
        </a>
      </li>
      <li className={`${styles.menu_item} ${isFooter ? styles.hidden_menu_item : styles.active_menu_item}`}>
        <a href="/">
          Конвертер валют
        </a>
      </li>
      <li className={styles.menu_item}>
        <a href="/">
          Контакты
        </a>
      </li>
      <li className={styles.menu_item}>
        <a href="/">
          Задать вопрос
        </a>
      </li>

    </ul>
  );
}

SiteMenu.propTypes = {
  className: PropTypes.string,
  isFooter: PropTypes.bool,
};

export default SiteMenu;
