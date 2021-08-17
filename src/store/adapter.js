import {Currency} from '../const';

export const adaptRates = (rates) => ({
  [Currency.RUB]: rates[Currency.RUB],
  [Currency.GBP]: rates[Currency.GBP],
  [Currency.EUR]: rates[Currency.EUR],
  [Currency.USD]: rates[Currency.USD],
  [Currency.CNY]: rates[Currency.CNY],
});
