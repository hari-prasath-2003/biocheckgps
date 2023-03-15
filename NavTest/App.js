import React, { useEffect } from 'react';
import MainContainer from './navigation/MainContainer';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator()
import * as Location from 'expo-location';
import Login from './navigation/screens/login';
export default function App() {
  useEffect(() => {
    Location.requestForegroundPermissionsAsync()

  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerLeft: null, headerShown: false }}>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='home' component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

