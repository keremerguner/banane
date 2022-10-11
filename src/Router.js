import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';

const Stack = createNativeStackNavigator();

const Banane = () => {

  const AuthStack = () => {

    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuthStack' component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Banane;