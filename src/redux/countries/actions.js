import API from 'utils/apiClient';
import React from 'react';
import { message } from 'antd';
import ErrorMessage from 'components/ErrorMessage';
import types from './constants';

const METHOD_BY_FACTOR = {
  name: API.getCountriesByName,
  currency: API.getCountriesByCurrency,
  code: (...args) => API.getCountriesByCode(args).then(({ data }) => ({
    data: [data],
  })),
};

export function searchCountries(factor, ...args) {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.SEARCH_COUNTRIES,
      });


      const { data } = await METHOD_BY_FACTOR[factor](...args);


      dispatch({
        type: types.SEARCH_COUNTRIES_SUCCESS,
        payload: {
          data: data.reduce((memo, country) => {
            const buf = memo;

            buf[country.alpha2Code] = country;

            return buf;
          }, {}),
        },
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        message.error(<ErrorMessage message="notFound" />);
      } else {
        message.error(<ErrorMessage message="error" />);
      }

      dispatch({
        type: types.SEARCH_COUNTRIES_FAILED,
        payload: { error },
      });
    }
  };
}

export function setCurrentCountry(code) {
  return {
    type: types.SET_CURRENT_COUNTRY,
    payload: {
      code,
    },
  };
}
