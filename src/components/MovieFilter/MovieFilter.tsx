import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Config from 'react-native-config';

import useFetch from '../../Hooks/useFetch/useFetch';
import Button from '../Button/Button';
import styles from './MovieFilter.styles';

type Props = {
onGenreSelect:()=>void;
onClearGenre:()=>void;
}

const MovieFilter = ({onGenreSelect, onClearGenre}:Props) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGQ4MWJkNDZjNGVhMjk4NWUwMzdlNDU3ZTZhYzE3ZiIsInN1YiI6IjY1NjVmNjgyZDk1NDIwMDBhYjY0Y2ZiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nZ23L4jAPbITOF7DeG8JJ7szFFhp0ugyhBA8UYXQLhg'
    }
  };
  const [filterData,setFilterData] = useState()
  const [isModalVisible, setModalVisible] = useState(false);

  const handleFetchGenres=()=>{
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(response => response.json())
  .then(response => setFilterData(response.genres))
  .catch(err => console.error(err));
  }

  useEffect(()=>{
handleFetchGenres()
  },[])

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Button title="Filter" onPress={toggleModal} />
      <View style={styles.modal_container}>
        <Modal
          style={styles.modal}
          scrollHorizontal={true}
          onBackdropPress={toggleModal}
          isVisible={isModalVisible}>
          <Button
            theme="secondary"
            onPress={() => {
              onClearGenre();
              closeModal();
            }}
            title="ALL"
            icon={'movie-open'}
          />
          {!!filterData &&
            filterData.map((d,k )=> {
              if(k<9)
              return(<Button
                theme="secondary"
                key={d.id}
                onPress={() => {
                  onGenreSelect(d);
                  closeModal();
                }}
                title={d.name}
                icon={'movie-open'}
              />)
              })}
        </Modal>
      </View>
    </View>
  );
};

export default MovieFilter;