import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import store from 'store';

import TodoList from './TodoList';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}
