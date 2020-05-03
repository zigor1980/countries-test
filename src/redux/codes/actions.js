import API from 'utils/apiClient';
import types from './constants';

export function getAvailableCodes() {
  return async (dispatch) => {
    try {
      dispatch({
        type: types.GET_CODES,
      });

      const { data } = await API.getAvailableCodes();

      dispatch({
        type: types.GET_CODES_SUCCESS,
        payload: {
          data: data.reduce((memo, { alpha2Code, alpha3Code }) => memo.concat(alpha2Code, alpha3Code), []),
        },
      });
    } catch (error) {
      dispatch({
        type: types.GET_CODES_FAILED,
        payload: { error },
      });
    }
  };
}

export default {};
