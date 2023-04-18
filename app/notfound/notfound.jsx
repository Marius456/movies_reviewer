import { Stack, useRouter } from 'expo-router';
import {
  SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
import styles from './notfound.style';

function NotFound() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'lightWhite' },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.homeTitle}>Not Found 404</Text>
      </View>
      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() => router.back()}
      >
        <Text style={styles.homeBtnText}>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default NotFound;
