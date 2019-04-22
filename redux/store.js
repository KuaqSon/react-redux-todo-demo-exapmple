import { createStore, combineReducers } from 'redux';
import todo from '../components/todo/redux/reducer';

const reducers = combineReducers({
  todo,
  // manu many
});

export default createStore(reducers);