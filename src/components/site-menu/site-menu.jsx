import React from 'react';
import styles from './site-menu.module.scss';

const MENU_ITEMS = ['Услуги', 'Рассчитать кредит', 'Конвертер валют', 'Контакты', 'Задать вопрос'];

function SiteMenu() {
  return (
    <ul className={styles.site_list}>
      {MENU_ITEMS.map((menuItem) => (
        <li key={menuItem}>
          <a href="/">
            {menuItem}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SiteMenu;
