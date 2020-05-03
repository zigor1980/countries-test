import types from './constants';

const DEFAULT_STATE = {
  isLoading: false,
  error: null,
  data: [],
};

export default function reducer(state = DEFAULT_STATE, { type, payload = {} }) {
  switch (type) {
    case types.SEARCH_COUNTRIES: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case types.SEARCH_COUNTRIES_SUCCESS: {
      const { data } = payload;

      return {
        ...state,
        isLoading: false,
        data,
      };
    }
    case types.SEARCH_COUNTRIES_FAILED: {
      const { error } = payload;

      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    default: return state;
  }
}
