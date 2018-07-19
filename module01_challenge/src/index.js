import 'config/ReactotronConfig';

import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Pedro Henrique Fagundes Botelho',
        description: 'Teste',
      },
    ],
  }

  render() {
    return (
      <View style={ styles.container }>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
