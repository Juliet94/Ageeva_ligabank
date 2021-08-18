import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_RATES: 'data/loadRates',
  ADD_HISTORY_ITEM: 'data/addHistoryItem',
  CLEAR_HISTORY: 'data/clearHistory',
};

export const loadRates = createAction(ActionType.LOAD_RATES, (rates) => ({
  payload: rates,
}));

export const addHistoryItem = createAction(ActionType.ADD_HISTORY_ITEM, (historyItem) => ({
  payload: historyItem,
}));

export const clearHistory = createAction(ActionType.CLEAR_HISTORY);
