import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { colors } from 'styles';

import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from 'store/ducks/favorites';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
    // errorOnAdd: PropTypes.oneOfType([null, PropTypes.string]).isRequired,
    loading: PropTypes.bool.isRequired,
  }

  state = {
    repoNameInput: '',
  };

  navigateToFavorites = () => {
    const { navigation } = this.props;
    navigation.navigate('Favorites');
  }

  addFavorite = () => {
    const { repoNameInput } = this.state;
    const { addFavoriteRequest } = this.props;
    if (!repoNameInput.length) return;

    addFavoriteRequest(repoNameInput);
    this.setState({ repoNameInput: '' });
  }

  render() {
    const { errorOnAdd, favoritesCount, loading } = this.props;
    const { repoNameInput } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.content}>
          <Text style={styles.title}>
            Gitmark
          </Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositórios aos seus favoritos
          </Text>

          <View style={styles.form}>
            { !!errorOnAdd && (
              <Text style={styles.error}>
                { errorOnAdd }
              </Text>
            ) }

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuario/repositório"
              underlineColorAndroid="transparent"
              value={repoNameInput}
              onChangeText={repoName => this.setState({ repoNameInput: repoName })}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.addFavorite}
              activeOpacity={0.6}
            >
              { loading
                ? <ActivityIndicator size="small" color={colors.darkTransparent} />
                : (
                  <Text style={styles.buttonText}>
                    Adicionar aos favoritos
                  </Text>
                ) }

            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>
              Meus favoritos (
              { favoritesCount }
              )
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favoritesCount: state.favorites.data.length,
  errorOnAdd: state.favorites.errorOnAdd,
  loading: state.favorites.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
