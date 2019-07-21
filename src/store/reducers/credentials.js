import React from 'react';

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_NAME,
  CHANGE_CONFIRM_PASSWORD
} from '~/store/actionsTypes/credentials';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function credentials(state = INITIAL_STATE, action){
  switch(action.type){
    case CHANGE_NAME:
      return { ...state, name: action.payload };  
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case CHANGE_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    default: 
      return state;
  }
}
