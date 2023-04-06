import { Stack } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { Category } from "../../components"

import styles from './browse.style';

const Browse = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'lightgray' },
                    headerShadowVisible: false,
                    headerTitle: "Home",
                    headerTitleAlign: 'center'
                }}
            />


            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    // style={{
                    //     flex: 1,
                    //     padding: 10,
                    // }}
                >
                    <Category />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Browse;