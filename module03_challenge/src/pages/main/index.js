import React, { Component } from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import styles from './styles';

MapboxGL.setAccessToken('pk.eyJ1IjoicGVkcm9mYWd1bmRlcyIsImEiOiJjamtnd21ldXowbzB1M3BsZWZnMnBoaDNuIn0.Y3BbrkR6GQC2owMgriRBWA');

export default class Main extends Component {
  renderAnnotations() {
    return (
      <MapboxGL.PointAnnotation
        id='rocketseat'
        coordinate={[-49.6446024, -27.2108001]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <MapboxGL.Callout title='Rocketseat House' />
      </MapboxGL.PointAnnotation>
    )
  }

  render() {
    return (
      <MapboxGL.MapView
        centerCoordinate={[-49.6446024, -27.2108001]}
        style={styles.container}
        showUserLocation
        styleURL={MapboxGL.StyleURL.Dark}
      >
        {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}
