import { createStore } from 'redux';
import contactReducer from '../store/reducer';

const store = createStore(contactReducer);

export default store;