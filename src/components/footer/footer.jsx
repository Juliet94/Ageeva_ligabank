import React from 'react';
import styles from './footer.module.scss';
import Logo from '../logo/logo';
import SiteMenu from '../site-menu/site-menu';
import Socials from '../socials/socials';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div>
          <Logo />
          <p className={styles.description}>
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019
          </p>
        </div>
        <nav>
          <SiteMenu className={styles.list} />
        </nav>
        <div className={styles.mobile}>
          <a href="tel: *0904">
            *0904
          </a>
          <p className={styles.description}>
            Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
          </p>
        </div>
        <div className={styles.phone}>
          <a href="tel: +78001112233">
            8 800 111 22 33
          </a>
          <p className={styles.description}>
            Бесплатный для всех городов России
          </p>
        </div>
        <Socials />
      </div>
    </footer>
  );
}

export default Footer;
