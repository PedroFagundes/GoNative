import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssueItem = ({ issue, openIssue }) => (
  <View style={styles.item}>
    <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    <View style={styles.infoContainer}>
      <Text style={styles.name} numberOfLines={1}>
        { issue.title }
      </Text>
      <Text style={styles.issue}>
        { issue.user.login }
      </Text>
    </View>
    <TouchableOpacity onPress={() => openIssue(issue.html_url)}>
      <Icon style={styles.detailArrow} name="angle-right" size={20} />
    </TouchableOpacity>
  </View>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({}).isRequired,
  openIssue: PropTypes.func.isRequired,
};

export default IssueItem;
