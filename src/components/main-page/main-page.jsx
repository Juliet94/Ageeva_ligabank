import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
import History from '../history/history';

function MainPage() {
  return (
    <div>
      <Header />
	    <main>
	      <h1 className="visually-hidden">
		      Лига банк - конвертер валют
	      </h1>
        <Promo />
        <Converter />
        <History />
	    </main>
      <Footer />
    </div>
  );
}

export default MainPage;
