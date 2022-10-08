import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const Banane = () => {


  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!'
      )
      .then(res => console.log('response:' + res))
      .catch(err => console.log('error: ' + err))
  }

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!'
      )
      .then(console.log('Sign In'))
      // .then(res => console.log('response:' + JSON.stringify(res)))
      .catch(err => console.log('error: ' + err))
  }

  const signOut = () => {
    auth()
      .signOut()
      .then(console.log('Sign Out'))
      // .then(res => console.log('Sign Out:' + JSON.stringify(res)))
      .catch(err => console.log('error: ' + err))
  }

  const checkUser = () => {
    const user = auth().currentUser;
    console.log(user)
  }

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 60, color: 'red' }}>BANANE</Text>
      <Button title='Sign Up' onPress={signUp} />
      <Button title='Sign In' onPress={signIn} />
      <Button title='Sign Out' onPress={signOut} />
      <Button title='Check User' onPress={checkUser} />

    </SafeAreaView>
  )
}

export default Banane;