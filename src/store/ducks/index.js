import { combineReducers } from 'redux';

import credentials from '~/store/reducers/credentials';
import todo from '~/store/reducers/todo';

const reducers = combineReducers({
  credentials,
  todo
});

export default reducers;
