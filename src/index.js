import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import dayjs from 'dayjs';

import App from './components/app/app';
import {fetchRates} from './store/api-actions';

import {reducer} from './store/reducer';
import {createAPI} from './services/api';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

// store.dispatch(fetchRates(dayjs(new Date()).format('YYYY-MM-DD')));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
