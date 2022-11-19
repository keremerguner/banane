import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import FlashMessage from "react-native-flash-message";
import Messages from './pages/Messages';
import colors from './styles/colors';
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Banane = () => {

  const [userSession, setUserSession] = useState()

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user)
    })
  }, [])

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
        {
          !userSession ? (
            <Stack.Screen name='AuthStack' component={AuthStack} options={{ headerShown: false }} />
          ) : (
            <Stack.Screen
              name='MessagesPage'
              component={Messages}
              options={{
                title: 'Dert Köşesi',
                headerTintColor: colors.lightBlue,
                headerRight: () => (
                  <Icon
                    name='logout'
                    size={30}
                    color={'#C0392B'}
                    onPress={() => auth().signOut()}
                  />
                )
              }}
            />
          )
        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default Banane;