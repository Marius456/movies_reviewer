import { Stack, useRouter, useSearchParams } from "expo-router";
import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Category } from "../../components";
import useFetch from "../../hooks/useFetch"
import styles from "./moviedetails.style";

const MovieDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch(`movie/${params.id}`, {
        api_key: "8e325dd835257b2af80167acb9002318",
    });
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'lightgray' },
                    headerShadowVisible: false,
                    headerTitle: data?.title,
                    headerTitleAlign: 'center'
                }}
            />
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
                onPress={() => router.push(`/browse/browse`)}>
                <Text style={styles.btnText}>Play Movie</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Add to Library</Text>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardsContainer}>
                    {isLoading ? (
                        <ActivityIndicator size='large' color='gray' />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : (
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
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MovieDetails;