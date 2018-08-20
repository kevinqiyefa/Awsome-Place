import React from 'react';

import { AppRegistry } from 'react-native';
import { Provider } from 'react-reduct';
import App from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent('myfirstrnapp', () => RNRedux);
