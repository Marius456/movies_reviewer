import React, { useState } from "react"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router"
import styles from "./category.style"

import MovieCard from "../../components/common/cards/MovieCard"

const Category = () => {
    const router = useRouter()
    const isLoading = false
    const error = false

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Category Title</Text>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color='gray' />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        renderItem={({ item }) => (
                            <MovieCard
                                item={item}
                            />
                        )}
                        // keyExtractor={item => item?.id}
                        contentContainerStyle={{ columnGap: 16 }}
                        horizontal
                    />
                )}
            </View>
        </View>
    )
}

export default Category