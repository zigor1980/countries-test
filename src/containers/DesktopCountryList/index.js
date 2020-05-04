import { connect } from 'react-redux';
import get from 'lodash/get';
import { setCurrentCountry } from 'redux/countries/actions';
import DesktopCountryList from './DesktopCountryList';

function getCountriesArray(state) {
  return Object.values(get(state, ['countries', 'data'], {}));
}

function getCurrentCountry(state) {
  const currentCountry = get(state, ['countries', 'current'], null);

  return get(state, ['countries', 'data', currentCountry], null);
}

export default connect((state) => ({
  codes: state.codes.data,
  countries: getCountriesArray(state),
  isLoading: state.countries.isLoading,
  currentCountry: getCurrentCountry(state),
  locale: state.locale.lang,
}), { setCurrentCountry })(DesktopCountryList);
