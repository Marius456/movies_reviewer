import { Stack, useRouter, useSearchParams } from "expo-router";
import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Category } from "../../components";
import useFetch from "../../hooks/useFetch"
import styles from "./videoplayer.style";

const VideoPlayerPage = () => {
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
        </SafeAreaView>
    )
}

export default VideoPlayerPage;