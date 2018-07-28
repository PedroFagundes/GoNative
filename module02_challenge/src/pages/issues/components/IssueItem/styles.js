import { StyleSheet } from 'react-native';
import { metrics, general, colors } from 'styles';

const styles = StyleSheet.create({
  item: {
    ...general.box,
    margin: metrics.baseMargin,
    marginVertical: metrics.baseMargin / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
  },

  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  issue: {
    fontSize: 12,
    color: colors.regular,
  },

  detailArrow: {
    color: colors.light,
  },
});

export default styles;
