import {createReducer} from '@reduxjs/toolkit';
import {loadRates} from './action';

const initialState = {
  rates: {
    RUB: '',
    USD: '',
    EUR: '',
    GBP: '',
    CNY: '',
  },
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadRates, (state, action) => {
      state.rates = action.payload;
    });
});
