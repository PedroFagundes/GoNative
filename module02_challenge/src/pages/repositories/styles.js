import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  newRepositoryContainer: {
    margin: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  repositoriesContainer: {
    flex: 1,
    borderTopColor: colors.light,
    borderTopWidth: 1,
    marginHorizontal: metrics.baseMargin,
  },

  input: {
    padding: metrics.basePadding / 2,
    backgroundColor: colors.white,
    width: metrics.screenWidth - 70,
    color: colors.darker,
    fontSize: 12,
  },

  addRepositoryButton: {
    width: 40,
    alignItems: 'flex-end',
    fontSize: 16,
  },

  icon: {
    color: colors.darker,
    margin: metrics.baseMargin,
  },

  loading: {
    marginTop: metrics.baseMargin,
  },
});

export default styles;
