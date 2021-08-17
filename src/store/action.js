import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_RATES: 'data/loadRates',
};

export const loadRates = createAction(ActionType.LOAD_RATES, (rates) => ({
  payload: rates,
}));
