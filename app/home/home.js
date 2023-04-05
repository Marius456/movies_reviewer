import { Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import styles from './home.style';
import { COLORS } from '../../constants/theme';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.homeTitle}>Flexn Presents</Text>
            </View>
            <TouchableOpacity style={styles.homeBtn}>
                <Text style={styles.homeBtnText}>Browse</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeBtn}>
                <Text style={styles.homeBtnText}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;