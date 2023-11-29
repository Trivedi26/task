import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: radius.smooth,
    margin: spacing.medium,
    backgroundColor: colors.secondary,
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 250,
    resizeMode: 'contain',
  },
  inner_container: {
    margin: spacing.medium,
  },
  name: {
    color: colors.text,
    fontSize: 18,
    marginBottom: spacing.tiny,
  },
  genre_container: {
    flexDirection: 'row',
    marginVertical: spacing.small,
  },
  genre: {
    marginRight: spacing.tiny,
    color: colors.text,
    fontSize: 12,
    fontStyle: 'italic',
  },
  rate: {
    color: colors.text,
    marginVertical: spacing.tiny,
  },
  brief: {
    color: colors.text,
    fontStyle: 'italic',
  },
});