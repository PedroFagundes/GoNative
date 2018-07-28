import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  filter: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    margin: metrics.baseMargin,
    padding: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterOption: {
    paddingHorizontal: metrics.basePadding * 2,
  },

  filterOptionTitle: {
    color: colors.darker,
    fontSize: 12,
    opacity: 0.50,
  },

  filterOptionTitleSelected: {
    color: colors.darker,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
