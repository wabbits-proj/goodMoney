import AsyncStorage from '@react-native-community/async-storage';

const KEY_STORAGE = "@goodMoney";

export const setItem = (collection, object) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(`${KEY_STORAGE}::${collection}`, obj2str(object))
      .then(() => {
        resolve(object);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getItem = collection => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(`${KEY_STORAGE}::${collection}`)
      .then(object => {
        resolve(validateReturn(object));
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const removeItem = collection => {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(`${KEY_STORAGE}::${collection}`)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const updateItem = (collection, object) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.mergeItem(`${KEY_STORAGE}::${collection}`, obj2str(object))
      .then(() => {
        AsyncStorage.getItem(`${KEY_STORAGE}::${collection}`)
          .then(result => {
            resolve(result);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });
};

const obj2str = obj => {
  if (typeof obj == 'object') {
    return JSON.stringify(obj);
  } else {
    return obj;
  }
}

const validateReturn = param => {
  let res;
  try {
    res = JSON.parse(param);
  } catch (err) {
    res = param
  }
  return res;
}
