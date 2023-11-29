import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MovieDetailArea.styles';

type Props ={
    data:any;
}

const MovieDetailArea = ({data}:Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.left_container}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.director}>
          Production Companies <Icon name="video-vintage" size={16} />
          </Text>
          {data.production_companies.map((item:any,i:number)=>{
            return (
              <View key={i}>
                <Text style={styles.genre}>{item.name}</Text>
              </View>
            );
          })}
        </View>
        <Image source={{uri:  `https://www.themoviedb.org/t/p/w1280/${data.poster_path}`}} style={styles.image} />
      </View>
      <Text style={styles.brief}> {data.overview}</Text>
    </View>
  );
};

export default MovieDetailArea;