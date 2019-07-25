import React from 'react';

import {
  GET_HISTORIC,
  INFO_MONEY_DONE,
  SET_OBJECTIVE,
  SET_CREDIT,
  SET_DEBITS_MONTH,
  SET_DEBITS_NEXT_MONTH
} from '~/store/actionsTypes/todo';

const INITIAL_STATE = {
  getHistoric: 0,
  infoMoneyDone: false,
  objective: '0',
  credit: '0',
  debitsMonth: '0',
  debitsNextMonth: '0'
}

export default function todo(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_HISTORIC:
      return { ...state, getHistoric: action.payload };  
    case INFO_MONEY_DONE:
      return { ...state, infoMoneyDone: action.payload };  
    case SET_OBJECTIVE:
      return { ...state, objective: action.payload };  
    case SET_CREDIT:
      return { ...state, credit: action.payload };  
    case SET_DEBITS_MONTH:
      return { ...state, debitsMonth: action.payload };  
    case SET_DEBITS_NEXT_MONTH:
      return { ...state, debitsNextMonth: action.payload };  
    default: 
      return state;
  }
}
