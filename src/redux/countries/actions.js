import API from 'utils/apiClient';
import types from './constants';

const METHOD_BY_FACTOR = {
  name: API.getCountriesByName,
  currency: API.getCountriesByCurrency,
  code: API.getCountriesByCode,
};

export function searchCountries(factor, query, params) {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.SEARCH_COUNTRIES,
      });

      const { data } = await METHOD_BY_FACTOR[factor](query, ...params);

      dispatch({
        type: types.SEARCH_COUNTRIES_SUCCESS,
        payload: {
          data: data.reduce((memo, { alpha2Code, alpha3Code }) => memo.concat(alpha2Code, alpha3Code), []),
        },
      });
    } catch (error) {
      dispatch({
        type: types.SEARCH_COUNTRIES_FAILED,
        payload: { error },
      });
    }
  };
}

export default {};
