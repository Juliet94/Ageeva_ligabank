import React from 'react';
import styles from './header.module.scss';

import SiteMenu from '../site-menu/site-menu';
import Logo from '../logo/logo';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <nav>
          <SiteMenu />
        </nav>
        <div>
          <a className={styles.login} href="/">
            Войти в Интернет-банк
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
