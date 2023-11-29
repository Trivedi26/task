import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

const baseStyles = StyleSheet.create({
  button_container: {
    padding: spacing.medium,
    margin: spacing.medium,
    borderRadius: radius.smooth,
    borderWidth: 0.8,
    borderColor: '#EBEBEB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  title: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
export default {
  default: StyleSheet.create({
    button_container: {
      ...baseStyles.button_container,
    },
    title: {
      ...baseStyles.title,
    },
    icon: {
      display: 'none',
    },
  }),

  secondary: StyleSheet.create({
    button_container: {
      ...baseStyles.button_container,
      width: 100,
      height: 100,
      flexDirection: 'column',
    },
    title: {
      ...baseStyles.title,
      marginBottom: spacing.medium,
    },
    icon: {
      color: colors.text,
    },
  }),
};