import types from './constants';

export function setLocale(lang) {
  return {
    type: types.SET_LOCALE,
    payload: {
      lang,
    },
  };
}

export default {};
