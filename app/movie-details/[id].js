import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, Image, RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Category, ScreenHeaderBtn } from "../../components";
import useFetch from "../../hooks/useFetch"
import styles from "./moviedetails.style";
import left from "../../assets/icons/left.png"

const MovieDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch(`movie/${params.id}`, {
        api_key: "8e325dd835257b2af80167acb9002318",
    });
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch()
        setRefreshing(false)
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                // options={{
                //     headerStyle: { backgroundColor: 'lightgray' },
                //     headerShadowVisible: false,
                //     headerTitle: data?.title,
                //     headerTitleAlign: 'center'
                // }}
                options={{
                    headerStyle: { backgroundColor: 'lightWhite' },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: data?.title,
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <View style={styles.cardsContainer}>
                    {isLoading ? (
                        <ActivityIndicator size='large' color='gray' />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : (
                        <>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={{ uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}` }}
                                    resizeMode="contain"
                                    style={styles.movieImage}
                                />
                            </View>
                            <View>
                                <Text style={styles.title}>Movie Details</Text>
                                <Text>{data?.overview}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => router.push(`/video-player/${data.id}`)}                >
                                <Text style={styles.btnText}>Play Movie</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText}>Add to Library</Text>
                            </TouchableOpacity>
                            <FlatList
                                data={[data.genres[0]]}
                                renderItem={({ item }) => (
                                    <Category
                                        item={item}
                                    />
                                )}
                                keyExtractor={item => item?.id}
                                contentContainerStyle={{ columnGap: 16 }}
                            />
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MovieDetails;