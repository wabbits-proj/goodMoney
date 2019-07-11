import React from 'react';
import * as firebase from 'firebase';
import db from '~/config/firebase';

export function login(email, password){
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res.user);    
      })
      .catch(error => {
        reject(error);
      });
  });
}