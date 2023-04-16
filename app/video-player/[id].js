import { Stack, useRouter, useSearchParams } from "expo-router";
import { SafeAreaView, View } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";
import useFetch from "../../hooks/useFetch";
import styles from "./videoplayer.style";

const VideoPlayerPage = () => {
    const params = useSearchParams();
    const router = useRouter();
    let trailer = null

    const { data, isLoading, error, refetch } = useFetch(`movie/${params.id}/videos`, {
        api_key: "8e325dd835257b2af80167acb9002318",
    });

    if(data.results)
        trailer = data.results.find(i => i.type === "Trailer")

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'lightgray' },
                    headerShadowVisible: false,
                    headerTitle: trailer?.name,
                    headerTitleAlign: 'center'
                }}
            />

            <View>
                {/* <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={trailer}
                /> */}
            </View>
        </SafeAreaView>
    )
}

export default VideoPlayerPage;