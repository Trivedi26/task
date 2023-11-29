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
  commentsAuthor: {
    color: colors.text,
    fontSize: 16,
    marginBottom: spacing.tiny,
    padding: spacing.medium,
    fontWeight:"bold"
  },
  comments: {
    color: colors.text,
    fontSize: 14,
    marginBottom: spacing.tiny,
    padding: spacing.medium,
  },
});