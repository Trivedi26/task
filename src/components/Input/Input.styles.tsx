import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    borderRadius: radius.smooth,
    margin: spacing.medium,
    backgroundColor: colors.secondary,
  },
  comment: {
    color: colors.text,
    fontSize: 13,
    marginBottom: spacing.tiny,
  },
  input: {
    padding: spacing.medium,
  },
});