import { createNumberMask, createTextMask } from 'redux-form-input-masks';

export const currencyMask = createNumberMask({
  prefix: 'US$ ',
  suffix: ' per item',
  decimalPlaces: 2,
  locale: 'en-US',
});

export const celPhoneMask = createTextMask({
  pattern: '(99)99999-9999',
});

export const CpfMask = createTextMask({
  pattern: '999.999.999-99',
});

export const CnpjMask = createTextMask({
  pattern: '99.999.999/9999-99',
});

export const CepMask = createTextMask({
  pattern: '99999-999',
});
