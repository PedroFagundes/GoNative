import 'config/ReactotronConfig';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Post from 'components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Pedro Fagundes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Pedro Fagundes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Pedro Fagundes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>
            GoNative App
          </Text>
        </View>
        <ScrollView style={ styles.postsContainer }>
          { this.state.posts.map((post) => (
            <Post
              key={ post.id }
              title={ post.title }
              author={ post.author }
              description={ post.description }
              />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#333333',
  },

  header: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    padding: 20,
  },

  headerText: {
    color: '#333333',
    fontWeight: 'bold',
  },

  postsContainer: {
    backgroundColor: '#EE7777',
    paddingVertical: 10,
    paddingHorizontal: 20
  }
});
