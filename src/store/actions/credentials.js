import React from 'react';

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_NAME,
  CHANGE_CONFIRM_PASSWORD
} from '~/store/actionsTypes/credentials';

export function changeName(text){
  return {
    type: CHANGE_NAME,
    payload: text
  }
}

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
export function changeConfirmPassword(text){
  return {
    type: CHANGE_CONFIRM_PASSWORD,
    payload: text
  }
}
