import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Post = ({ title, author, description }) => (
  <View style={ styles.post }>
    <Text style={ styles.postTitle }>
      { title }
    </Text>
    <Text style={ styles.postAuthor }>
      { author }
    </Text>
    <Text style={ styles.postDescription }>
      { description }
    </Text>
  </View>
);

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 5,
    marginVertical: 10,
  },

  postTitle: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },

  postAuthor: {
    color: '#999999',
    borderBottomWidth: 20,
    borderBottomColor: '#EEEEEE',
  },

  postDescription: {
    color: '#666666',
  }
})

export default Post;
