import types from '../constants/types';

const initialState = {
  colorTheme: 'day',
};

const colorTheme = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COLOR_THEME:
      return {
        ...state,
        colorTheme: action.payload.colorTheme,
      };
    default:
      return state;
  }
};

export default colorTheme;
