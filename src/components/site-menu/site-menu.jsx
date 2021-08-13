import React from 'react';

const MENU_ITEMS = ['Услуги', 'Рассчитать кредит', 'Конвертер валют', 'Контакты', 'Задать вопрос'];

function SiteMenu() {
  return (
    <nav>
      <ul>
        {MENU_ITEMS.map((menuItem) => (
          <li key={menuItem}>
            <a href="/">
              {menuItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SiteMenu;
