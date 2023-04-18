import { Stack, useRouter } from "expo-router";
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, Text, View } from "react-native"
import { Category, ScreenHeaderBtn } from "../../components"
import useFetch from "../../hooks/useFetch";
import left from "../../assets/icons/left.png"

import styles from './browse.style';

const Browse = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch("genre/movie/list", {
        api_key: "8e325dd835257b2af80167acb9002318",
        language: 'en-US'
    });
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'lightgray' },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={left}
                            dimension='60%'
                            handlePress={() => router.push(`/home/home`)}
                        />
                    ),
                    headerTitle: "Home",
                }}
            />


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardsContainer}>
                    {isLoading ? (
                        <ActivityIndicator size='large' color='gray' />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : (
                        <FlatList
                            data={data.genres}
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

export default Browse;