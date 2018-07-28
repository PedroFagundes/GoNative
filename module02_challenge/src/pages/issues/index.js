import React, { Component } from 'react';
import {
  View, FlatList, ActivityIndicator, AsyncStorage, Linking,
} from 'react-native';
import { colors } from 'styles';

import api from 'services/api';

import IssueItem from './components/IssueItem';
import IssueFilter from './components/IssueFilter';
import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('repository').name}`,
    headerTintColor: colors.darker,
  });

  state = {
    issues: [],
    loading: true,
    refreshing: false,
    issueState: 'all',
  }

  async componentDidMount() {
    await this.loadCurrentIssueState();
    this.loadIssues();
  }

  loadCurrentIssueState = async () => {
    const issueState = await AsyncStorage.getItem('@Gitissues:issueState');
    this.setState({ issueState: issueState !== null ? issueState : 'all' });
  }

  loadIssues = async () => {
    try {
      const { navigation } = this.props;
      const { issueState } = this.state;
      this.setState({ refreshing: true });
      const response = await api.get(`/repos/${navigation.getParam('repository').path}/issues?state=${issueState}`);
      const issues = response.data;
      this.setState({ issues, loading: false, refreshing: false });
    } catch (err) {
      this.setState({ loading: false, refreshing: false });
      console.tron.log(`ERROR: ${err}`);
    }
  }

  filterIssueState = async (issueState = null) => {
    await this.setState({ issueState });
    await AsyncStorage.setItem('@Gitissues:issueState', issueState);
    this.loadIssues();
  }

  openIssue = (issueURL) => {
    Linking.openURL(issueURL).catch(err => console.tron.log(`ERROR: ${err}`));
  }

  renderList = () => {
    const { issues, refreshing, issueState } = this.state;
    return (
      <View>
        <IssueFilter filterIssueState={this.filterIssueState} issueState={issueState} />
        <FlatList
          data={issues}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadIssues}
          refreshing={refreshing}
        />
      </View>
    );
  }

  renderListItem = ({ item }) => (
    <IssueItem issue={item} openIssue={this.openIssue} />
  )

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        { loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}
