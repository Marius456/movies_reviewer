import React from 'react';
import {
  Image, Text, TouchableOpacity, View,
} from 'react-native';

import styles from './moviecard.style';

function MovieCard({ item, selectedMovie, handleCardPress }) {
  return (
    <TouchableOpacity
      style={styles.container(selectedMovie, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={styles.imageContainer(selectedMovie, item)}
        onPress={() => handleCardPress(item)}
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
          resizeMode="contain"
          style={styles.movieImage}
        />
      </TouchableOpacity>
      <Text style={styles.movieTitle(selectedMovie, item)} numberOfLines={1}>{item.title}</Text>
    </TouchableOpacity>
  );
}

export default MovieCard;
