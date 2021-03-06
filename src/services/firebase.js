import React from 'react';
import * as firebase from 'firebase';
import db from '~/config/firebase';

export function login(email, password){
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        getDataUser(res.user.uid)
          .then(data => resolve(data));
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

export function insert(ref, obj){
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

function getDataUser(id){
  return new Promise((resolve, reject) => {
    db()
    .ref(`users/${id}`)
    .once('value')
    .then(function(snapshot){
      resolve(snapshot);
    })
    .catch(err => {
      reject(err);
    })
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

export function getDebitsMonthUser(month, year, id){
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
        array.push(keysSnapshot.val());
      })

      resolve(array);
    })
    .catch(err => {
      reject(err);
    })
  });
}

export function getCreditMonthUser(month, year, id){
  let credit = 0;
  return new Promise((resolve, reject) => {
    db()
    .ref(`hist/${id}`)
    .child(`credit/${year}`)
    .orderByChild('month')
    .equalTo(month)
    .once('value')
    .then(function(snapshot){
      snapshot.forEach((keysSnapshot) => {
        let valueFormated = keysSnapshot.val().value.split('.').join('').split(',').join('.');
        credit = parseFloat(credit) + parseFloat(valueFormated);
      })

      resolve(credit.toFixed(2));
    })
    .catch(err => {
      reject(err);
    })
  });
}

