import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
} from 'react-native';

const Todo = ({ title }) => (
  <View>
    <Text>
      { title }
    </Text>
  </View>
);

Todo.defaultProps = {
  title: 'Todo padrão',
};

Todo.propTypes = {
  title: PropTypes.string,
};

export default Todo;
