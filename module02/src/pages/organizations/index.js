import React, { Component } from 'react';
import api from 'services/api';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import OrganizationItem from './components/OrganizationItem';

import styles from './styles';

export default class Oganizations extends Component {
  static navigationOptions = {
    title: 'Organizações',
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
  }

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/orgs`);

    this.setState({
      data: response.data,
      loading: false,
      refreshing: false,
    });
  }

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      numColumns={2}
      columnWrapperStyle={styles.columnContainer}
      onRefresh={this.loadOrganizations}
      refreshing={this.state.refreshing}
    />
  )

  renderListItem = ({ item }) => (
    <OrganizationItem organization={item} />
  )

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        { loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList() }
      </View>
    );
  }
}
