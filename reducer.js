import React from 'react';
import actions from './actionTypes';

const initialState = {
  username: '',
  password: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { username: action.value };
    default:
      return state;
  }
}

export default reducer;