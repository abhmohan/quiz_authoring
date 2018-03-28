
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './App';

const initialState = {
  
}

let store = createStore(
  rootReducer,
  initialState
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);