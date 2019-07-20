import React from 'react';

import {
  GET_HISTORIC,
  SET_OBJECTIVE,
  SET_CREDIT
} from '~/store/actionsTypes/todo';

const INITIAL_STATE = {
  getHistoric: 0,
  objective: '3.500,00',
  credit: '0'
}

export default function todo(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_HISTORIC:
      return { ...state, getHistoric: action.payload };  
    case SET_OBJECTIVE:
      return { ...state, objective: action.payload };  
    case SET_CREDIT:
      return { ...state, credit: action.payload };  
    default: 
      return state;
  }
}
