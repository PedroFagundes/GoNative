import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const IssueFilter = ({ filterIssueState, issueState }) => (
  <View style={styles.filter}>
    <TouchableOpacity style={styles.filterOption} onPress={() => filterIssueState('all')}>
      <Text style={issueState === 'all' ? styles.filterOptionTitleSelected : styles.filterOptionTitle}>
        Todas
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterOption} onPress={() => filterIssueState('open')}>
      <Text style={issueState === 'open' ? styles.filterOptionTitleSelected : styles.filterOptionTitle}>
        Abertas
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterOption} onPress={() => filterIssueState('closed')}>
      <Text style={issueState === 'closed' ? styles.filterOptionTitleSelected : styles.filterOptionTitle}>
        Fechadas
      </Text>
    </TouchableOpacity>
  </View>
);

IssueFilter.propTypes = {
  filterIssueState: PropTypes.func.isRequired,
  issueState: PropTypes.string.isRequired,
};

export default IssueFilter;
