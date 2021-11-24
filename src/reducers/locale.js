import types from '../constants/types';

const initialState = {
  locale: 'ru',
};

const locale = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOCALE:
      return {
        ...state,
        locale: action.payload.locale,
      };
    default:
      return state;
  }
};

export default locale;
