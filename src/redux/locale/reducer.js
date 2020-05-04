import types from './constants';

const DEFAULT_STATE = {
  lang: localStorage.getItem('locale') || 'ru',
};

export default function reducer(state = DEFAULT_STATE, { type, payload = {} }) {
  switch (type) {
    case types.SET_LOCALE: {
      const { lang } = payload;

      return {
        ...state,
        lang,
      };
    }
    default: return state;
  }
}
