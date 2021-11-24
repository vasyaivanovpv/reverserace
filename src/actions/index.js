import types from '../constants/types';

export const setLocale = locale => dispatch => {
  dispatch({
    type: types.SET_LOCALE,
    payload: { locale: locale },
  });
};

export const setColorTheme = colorTheme => dispatch => {
  dispatch({
    type: types.SET_COLOR_THEME,
    payload: { colorTheme: colorTheme },
  });
};
