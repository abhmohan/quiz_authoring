import { combineReducers } from 'redux';
import questionsReducer from './addDeleteReducer';
import editReducer from './editQuestionReducer';

const rootReducer = combineReducers({
  questions:questionsReducer,
  currentquestion:editReducer
});

export default rootReducer;