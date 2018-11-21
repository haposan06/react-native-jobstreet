import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers'
import {AsyncStorage} from 'react-native';
const store = createStore(
  reducers,
    {},
    applyMiddleware(thunk)
);

export default store;