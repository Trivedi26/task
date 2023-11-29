import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './MovieComment.styles';

type Props ={
    comments:any;
}

const MovieComment = ({comments}:Props) => {

  return (
    <View>
      {comments.length !== 0 ? (
        !!comments &&
        comments.map((c:any, i:number) => (
          <View key={i} style={styles.container}>
            <Text style={styles.commentsAuthor}>Author: {c.author}</Text>
            <Text style={styles.comments}>{c.content}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.comments}>
          Be the first to comment on this movie.{' '}
          <Icon name="comment" size={14} />
        </Text>
      )}
    </View>
  );
};

export default MovieComment;