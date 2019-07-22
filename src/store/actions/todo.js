import React from 'react';

import {
  GET_HISTORIC,
  SET_OBJECTIVE
} from '~/store/actionsTypes/todo';

export function getHistoric(){
  return {
    type: GET_HISTORIC,
    payload: Math.random() * 10
  }
}

export function setObjective(text){
  return {
    type: SET_OBJECTIVE,
    payload: text
  }
}