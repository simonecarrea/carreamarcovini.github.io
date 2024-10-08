
import { combineReducers } from 'redux';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  // Aggiungi altri reducer se necessario
});

export default rootReducer;
