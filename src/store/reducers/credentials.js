import React from 'react';

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD
} from '~/store/actionsTypes/credentials';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

export default function credentials(state = INITIAL_STATE, action){
  switch(action.type){
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    default: 
      return state;
  }
}
