import React from 'react';

import {
  GET_HISTORIC,
  INFO_MONEY_DONE,
  SET_CREDIT,
  SET_OBJECTIVE,
  SET_DEBITS_MONTH,
  SET_DEBITS_NEXT_MONTH
} from '~/store/actionsTypes/todo';

export function getHistoric(){
  return {
    type: GET_HISTORIC,
    payload: Math.random() * 10
  }
}

export function infoMoneyDone(value){
  return {
    type: INFO_MONEY_DONE,
    payload: value
  }
}

export function setCredit(text){
  return {
    type: SET_CREDIT,
    payload: text
  }
}

export function setObjective(text){
  return {
    type: SET_OBJECTIVE,
    payload: text
  }
}

export function setDebitsMonth(text){
  return {
    type: SET_DEBITS_MONTH,
    payload: text
  }
}

export function setDebitsNextMonth(text){
  return {
    type: SET_DEBITS_NEXT_MONTH,
    payload: text
  }
}