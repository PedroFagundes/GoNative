import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <View style={styles.item}>
    <Image style={styles.avatar} source={{ uri: repository.avatar }} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>
        { repository.name }
      </Text>
      <Text style={styles.organization}>
        { repository.organization.login }
      </Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Issues', {repository: repository})}>
      <Icon style={styles.detailArrow} name="angle-right" size={20} />
    </TouchableOpacity>
  </View>
);

export default RepositoryItem;
