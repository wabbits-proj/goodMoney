import { combineReducers } from 'redux';

import credentials from '~/store/reducers/credentials';

const reducers = combineReducers({
  credentials
});

export default reducers;
