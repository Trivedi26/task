import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    borderRadius: radius.smooth,
    margin: spacing.medium,
    backgroundColor: colors.secondary,
    padding: spacing.medium,
  },
  inner_container: {
    margin: spacing.medium,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  left_container: {
    marginVertical: spacing.medium,
    marginRight: spacing.tiny,
    justifyContent: 'space-between',
    width: 150,
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 250,
    resizeMode: 'contain',
    marginLeft: spacing.small,
  },
  name: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  director: {
    color: colors.text,
    fontSize: 16,
    marginVertical: spacing.medium,
  },
  genre_container: {
    flexDirection: 'row',
  },
  genre_title: {
    fontSize: 16,
    color: colors.text,
  },
  genre: {
    marginRight: spacing.tiny,
    color: colors.text,
    fontSize: 16,
  },
  rate: {
    color: colors.text,
    marginVertical: spacing.tiny,
  },
  brief: {
    color: colors.text,
    padding: spacing.medium,
  },
  cast_container: {
    marginTop: spacing.large,
    flexDirection: 'column',
  },
  cast: {
    color: colors.text,
    fontSize: 16,
    marginBottom: spacing.tiny,
  },
  cast_map: {
    color: colors.text,
  },
});