import React from 'react';
import styles from './header.module.scss';

import SiteMenu from '../site-menu/site-menu';
import Login from '../login/login';
import Logo from '../logo/logo';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
        <nav>
          <SiteMenu />
          <Login />
        </nav>
      </div>
    </header>
  );
}

export default Header;
