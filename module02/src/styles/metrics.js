import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 3,
  screeWidth: width < height ? width : height,
  screeHeight: width < height ? height : width,
};