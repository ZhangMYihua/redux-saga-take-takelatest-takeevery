import { combineReducers } from 'redux';

import appReducer from './app.reducer';

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
