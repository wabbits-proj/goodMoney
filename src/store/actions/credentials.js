import React from 'react';

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD
} from '~/store/actionsTypes/credentials';

export function changeEmail(text){
  return {
    type: CHANGE_EMAIL,
    payload: text
  }
}

export function changePassword(text){
  return {
    type: CHANGE_PASSWORD,
    payload: text
  }
}