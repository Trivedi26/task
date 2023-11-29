import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, FlatList, StatusBar} from 'react-native';
import MovieCard from "../components/MovieCard/MovieCard";
import MovieFilter from '../components/MovieFilter/MovieFilter';
import routes from '../Navigation/routes';
import styles from './HomePage.styles';

const HomePage = () => {
  const navigation = useNavigation();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGQ4MWJkNDZjNGVhMjk4NWUwMzdlNDU3ZTZhYzE3ZiIsInN1YiI6IjY1NjVmNjgyZDk1NDIwMDBhYjY0Y2ZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZ23L4jAPbITOF7DeG8JJ7szFFhp0ugyhBA8UYXQLhg'
    }
  };
  
  const [displayList, setDisplayList] = useState([]);

const handleData=()=>{

  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => setDisplayList(response.results))
  .catch(err => console.error(err));
}

  useEffect(() => {
    handleData()
  }, []);

  const handleGenreSelect = selectedGenre => {
fetch(`https://api.themoviedb.org/3/movie/${selectedGenre.id}/similar?language=en-US&page=1`, options)
.then(response => response.json())
.then(response => setDisplayList(response.results))
.catch(err => console.error(err));;
  };

  const handleClearGenre = () => {
    setDisplayList(displayList);
  };

  const handleMovieDetail = id => {
    navigation.navigate(routes.MOVIE_DETAIL_PAGE, {id});
  };

  const renderMovieList = ({item}) => (
    <MovieCard movies={item} onSelect={() => handleMovieDetail(item.id)} />
  );

  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MovieFilter
        onGenreSelect={handleGenreSelect}
        onClearGenre={handleClearGenre}
      />
      <FlatList
        data={displayList}
        renderItem={renderMovieList}
        numColumns={2}
        keyExtractor={item => item.id}
        initialNumToRender={8}
      />
    </SafeAreaView>
  );
};
export default HomePage;