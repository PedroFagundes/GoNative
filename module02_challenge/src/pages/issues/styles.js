import { StyleSheet } from 'react-native';
import { metrics, general, colors } from 'styles';

const styles = StyleSheet.create({
  item: {
    ...general.box,
    margin: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    height: 40,
    width: 40,
    // borderRadius: 50,
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

  organization: {
    fontSize: 12,
    color: colors.regular,
  },

  detailArrow: {
    color: colors.light,
  },

  loading: {
    margin: metrics.baseMargin,
  },
});

export default styles;
