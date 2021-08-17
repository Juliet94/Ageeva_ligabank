import {loadRates} from './action';
import {adaptRates} from './adapter';

const APP_ID = '.json?app_id=25cfb4a93f284e4c9a2c8b1eab2babc1';

export const fetchRates = (date) => (dispatch, _getState, api) => (
  api.get(`/${date}${APP_ID}`)
    .then(({data}) => {
      dispatch(loadRates(adaptRates(data.rates)));
    })
);
