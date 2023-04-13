import { Stack, useRouter, useSearchParams } from "expo-router";
import { SafeAreaView, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import useFetch from "../../hooks/useFetch";
import styles from "./videoplayer.style";

const VideoPlayerPage = () => {
    const params = useSearchParams();
    const router = useRouter();
    // const video = useRef(null);

    const { data, isLoading, error, refetch } = useFetch(`movie/${params.id}/videos`, {
        api_key: "8e325dd835257b2af80167acb9002318",
    });
    // if (data.results)
        // console.log(`https://www.youtube.com/watch?v=${data?.results[0].key}`)
    return (
        // <View>
        //     <YoutubePlayer
        //         height={300}
        //         play={true}
        //         videoId={"imSefM4GPpE"}
        //     />
        // </View>
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'lightgray' },
                    headerShadowVisible: false,
                    headerTitle: data?.title,
                    headerTitleAlign: 'center'
                }}
            />

            <View>
                <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={data?.results[0].key}
                />
            </View>
        </SafeAreaView>
    )
}

export default VideoPlayerPage;