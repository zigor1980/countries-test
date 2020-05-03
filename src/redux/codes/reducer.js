import types from './constants';

const DEFAULT_STATE = {
  isLoading: false,
  error: null,
  data: [],
};

export default function reducer(state = DEFAULT_STATE, { type, payload = {} }) {
  switch (type) {
    case types.GET_CODES: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case types.GET_CODES_SUCCESS: {
      const { data } = payload;

      return {
        ...state,
        isLoading: false,
        data,
      };
    }
    case types.GET_CODES_FAILED: {
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
