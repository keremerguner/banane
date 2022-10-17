import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import FlashMessage from "react-native-flash-message";
import Messages from './pages/Messages';
import colors from './styles/colors';

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
      <Stack.Navigator>
        <Stack.Screen
          name='MessagesPage'
          component={Messages}
          options={{ title: 'Dert Köşesi', headerTintColor: colors.lightBlue }}
        />
        <Stack.Screen name='AuthStack' component={AuthStack} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default Banane;