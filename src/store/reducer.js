import {createReducer} from '@reduxjs/toolkit';
import {loadRates, addHistoryItem} from './action';

const initialState = {
  rates: {
    RUB: '73.550425',
    USD: '1',
    EUR: '0.853416',
    GBP: '0.728023',
    CNY: '6.4861',
  },
  history: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadRates, (state, action) => {
      state.rates = action.payload;
    })
    .addCase(addHistoryItem, (state, action) => {
      if (state.history.length > 10) {
        state.history.shift();
      }
      state.history.push(action.payload);
    });
});
