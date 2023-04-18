import React from 'react';
import { Stack } from 'expo-router';

function Layout() {
  return (
    <Stack initialRouteName="home/home">
      <Stack.Screen name="home/home" />
    </Stack>
  );
}

export default Layout;
