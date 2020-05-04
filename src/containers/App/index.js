import { connect } from 'react-redux';
import { getAvailableCodes } from 'redux/codes/actions';
import { searchCountries } from 'redux/countries/actions';
import { setLocale } from 'redux/locale/actions';
import App from './App';

export default connect((state) => ({
  codes: state.codes.data,
  countries: state.countries,
  locale: state.locale.lang,
}), {
  getAvailableCodes,
  searchCountries,
  setLocale,
})(App);
