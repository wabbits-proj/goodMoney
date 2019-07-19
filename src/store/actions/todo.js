import React from 'react';

import {
  GET_HISTORIC
} from '~/store/actionsTypes/todo';

export function getHistoric(){
  return {
    type: GET_HISTORIC,
    payload: Math.random() * 10
  }
}