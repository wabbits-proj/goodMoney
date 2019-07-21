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

export function createUser(name, email, password){
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {        
        insert(`users/${res.user.uid}`, { id: res.user.uid, name, email, objective: '0', credit: '0' })
          .then(data => resolve(data))
          .catch(error => reject(error));
      })
      .catch(error => {
        console.log(error);
      })
  });
}

export function resetPassword(email){
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      })
  });
}

function insert(ref, obj){
  return new Promise((resolve, reject) => {
    db()
    .ref(ref)
    .set(obj)
    .then(data => resolve(data))
    .catch(error => reject(error));
  });
}

export function insertChild(ref, child, obj){
  return new Promise((resolve, reject) => {
    db()
    .ref(ref)
    .child(child)
    .push(obj)
    .then(data => resolve(data))
    .catch(error => reject(error));
  });
}

export function getHistoricMonth(month, year, id){
  let array = [];
  return new Promise((resolve, reject) => {
    db()
    .ref(`hist/${id}`)
    .child(`debit/${year}`)
    .orderByChild('month')
    .equalTo(month)
    .once('value')
    .then(function(snapshot){
      snapshot.forEach((keysSnapshot) => {
        let keys = keysSnapshot.val();
        array.push({ ...keys, type: 'debit' });
      });

      db()
      .ref(`hist/${id}`)
      .child(`credit/${year}`)
      .orderByChild('month')
      .equalTo(month)
      .once('value')
      .then(function(snapshot){
        snapshot.forEach((keysSnapshot) => {
          let keys = keysSnapshot.val();
          array.push({ ...keys, type: 'credit' });
        })

        resolve(array);
      })
      .catch(error => reject(error));
    })
    .catch(error => reject(error));
  });
}

