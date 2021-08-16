import React from 'react';
import Header from '../header/header';
import styles from './main-page.module.scss'

function MainPage() {
  return (
    <Header />
	<main>
	<h1 className={visually-hidden}>
		Лига банк - конвертер валют
	</h1>
	<div className={styles.promo}>
		<div className={styles.wrapper}>
			<h2 className={styles.heading}>
				Лига Банк
			<h2>
			<p className={styles.slogan}>
				Кредиты на любой случай
			</p>
			<a className={styles.link}>
				Рассчитать кредит
			</a>
		</div>
	</div>
	</main>
  );
}

export default MainPage;
