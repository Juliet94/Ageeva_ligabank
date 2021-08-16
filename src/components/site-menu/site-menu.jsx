import React from 'react';
import PropTypes from 'prop-types';
import styles from './site-menu.module.scss';
import {MENU_ITEMS} from '../../const';
import classNames from 'classnames';

function SiteMenu({className}) {
  const ulClass = classNames(styles.site_list, className);
  return (
    <ul className={ulClass}>
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

SiteMenu.propTypes = {
  className: PropTypes.string,
};

export default SiteMenu;
