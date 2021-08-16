import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Promo from '../promo/promo';

function MainPage() {
  return (
    <div>
      <Header />
	    <main>
	      <h1 className="visually-hidden">
		      Лига банк - конвертер валют
	      </h1>
        <Promo />
	    </main>
      <Footer />
    </div>
  );
}

export default MainPage;
