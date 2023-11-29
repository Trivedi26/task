import React from 'react';
import {Text, Image, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './MovieCard.styles';

type Props = {
    movies:any;
    onSelect:()=>void;
    }

const MovieCard = ({movies, onSelect}:Props) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: `https://www.themoviedb.org/t/p/w1280/${movies.poster_path}`}} />
        <View style={styles.inner_container}>
          <Text style={styles.name}>{movies.title}</Text>
          <Text style={styles.rate}>
            Movie Rate: <Icon name="star" size={16} /> {movies.vote_average} / 10
          </Text>
          <Text numberOfLines={2} style={styles.brief}>
            {movies.overview}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;