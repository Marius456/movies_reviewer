import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack initialRouteName="home/home">
            <Stack.Screen name="home/home" />
        </Stack>
    )
}

export default Layout;