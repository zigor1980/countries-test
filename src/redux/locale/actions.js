import i18next from 'i18next';
import types from './constants';

export function setLocale(lang) {
  return (dispatch) => {
    i18next.changeLanguage(lang);
    localStorage.setItem('locale', lang);
    dispatch({
      type: types.SET_LOCALE,
      payload: {
        lang,
      },
    });
  };
}

export default {};
