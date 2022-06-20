import { combineReducers } from 'redux';

import auth from './auth';
import errors from './errors';
import loader from './loader';

export default combineReducers({
  auth,
  errors,
  loader,
});
