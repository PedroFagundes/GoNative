import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from 'services/api';

import styles from './styles';

import RepositoryItem from './components/RepositoryItem';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'GitIssues',
    headerBackTitle: null,
  }

  state = {
    repositories: [],
    newRepository: '',
    loading: true,
    refreshing: false,
  }

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const repositories = await AsyncStorage.getItem('@Gitissues:repositories');
    this.setState({
      repositories: repositories ? JSON.parse(repositories) : [],
      loading: false,
      refreshing: false,
    });
  }

  checkIfRepositoryExists = async (repository) => {
    const response = await api.get(`/repos/${repository}`);
    return response;
  }

  addRepository = async () => {
    const { newRepository, repositories } = this.state;
    try {
      const response = await this.checkIfRepositoryExists(newRepository);
      const repository = {
        id: response.data.id,
        name: response.data.name,
        path: response.data.full_name,
        organization: response.data.organization,
        avatar: response.data.owner.avatar_url,
      };

      await this.setState({
        repositories: [...repositories, repository],
      });
      AsyncStorage.setItem('@Gitissues:repositories', JSON.stringify(this.state.repositories));
    } catch (err) {
      console.tron.log(`Error: ${err}`);
    }

    this.setState({
      newRepository: '',
    });
  }

  renderList = () => {
    const { repositories, refreshing } = this.state;
    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  }

  renderListItem = ({ item }) => {
    const { navigation } = this.props;
    return <RepositoryItem repository={item} navigation={navigation} />;
  }

  render() {
    const { newRepository, loading } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.newRepositoryContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={newRepository}
            onChangeText={repositoryName => this.setState({ newRepository: repositoryName })}
          />
          <TouchableOpacity style={styles.addRepositoryButton} onPress={this.addRepository}>
            <Icon
              name="plus"
              size={16}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.repositoriesContainer}>
          { loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderList() }
        </View>
      </View>
    );
  }
}
