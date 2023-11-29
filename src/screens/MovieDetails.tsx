import React, { useState, useEffect } from 'react';
import { SafeAreaView,ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './MovieDetails.styles';
import MovieDetailArea from '../components/MovieDetailArea/MovieDetailArea';
import Input from '../components/Input/Input';
import MovieComment from '../components/MovieComment/MovieComment';

const MovieDetails = () => {
  const route = useRoute();
  const { id } = route.params;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGQ4MWJkNDZjNGVhMjk4NWUwMzdlNDU3ZTZhYzE3ZiIsInN1YiI6IjY1NjVmNjgyZDk1NDIwMDBhYjY0Y2ZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZ23L4jAPbITOF7DeG8JJ7szFFhp0ugyhBA8UYXQLhg'
    }
  };

  const [comments, setComments] = useState();
  const [movieDetail, setMovieDetail] = useState()
  const [loading, setLoading] = useState(true)

  const handleMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
      .then(response => setMovieDetail(response))
      .catch(err => console.error(err));
  }

  const handleComments = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => {
        setComments(response.results);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    setLoading(true)
    handleMovie()
    handleComments();
  }, [])

  function handleAddContent(content) {
    sendContent(content);
  }

  const sendContent = content => {
    const contentObject = {
      comment: content,
    };
    setComments([...comments, contentObject]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          loading
            ?
            <></>
            :
            (<>
              <MovieDetailArea data={movieDetail} />
              <Input placeholder={'Add a Comment'} onAdd={handleAddContent} />
              <MovieComment comments={comments} />
            </>)
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;