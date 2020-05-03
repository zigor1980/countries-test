import { combineReducers } from 'redux';

import countriesReducer from 'redux/countries/reducer';
import localeReducer from 'redux/locale/reducer';
import codeReducer from 'redux/codes/reducer';

export default function rootReducer() {
  return combineReducers({
    countries: countriesReducer,
    locale: localeReducer,
    codes: codeReducer,
  });
}
