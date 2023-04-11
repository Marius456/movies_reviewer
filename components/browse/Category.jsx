import React, { useState } from "react"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router"
import styles from "./category.style"
import useFetch from "../../hooks/useFetch"

import MovieCard from "../../components/common/cards/MovieCard"

const Category = ({ item }) => {
    const router = useRouter()
    const { data, isLoading, error } = useFetch("discover/movie", {
        api_key: "8e325dd835257b2af80167acb9002318",
        language: 'en-US',
        page: 1,
        with_genres: item.id
    });

    const [selectedMovie, setSelectedMovie] = useState();

    const handleCardPress = (item) => {
        router.push(`/movie-details/${item.id}`);
        setSelectedMovie(item.id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{item?.name}</Text>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color='gray' />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={data.results}
                        renderItem={({ item }) => (
                            <MovieCard
                                item={item}
                                selectedMovie={selectedMovie}
                                handleCardPress={handleCardPress}
                            />
                        )}
                        keyExtractor={item => item?.id}
                        contentContainerStyle={{ columnGap: 16 }}
                        horizontal
                    />
                )}
            </View>
        </View>
    )
}

export default Category