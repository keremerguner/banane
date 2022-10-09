import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

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

  const checkDb = () => {
    const reference = database().ref('books');
    reference
      .once('value')
      .then(snapshot => {
        const response = snapshot.val();
        console.log(response)
      })
  }
  const listenDb = () => {
    const reference = database().ref('books/1');
    reference
      .on('value', snapshot => {
        console.log(snapshot.val())
      })
  }

  const setDb = () => {
    const reference = database().ref('car/rentable');
    reference
      .set({
        brand: 'Audi',
        model: 'A6',
        price: '128.000'
      })
  }

  const updateDb = () => {
    const reference = database().ref('car/rentable');
    reference
      .update({
        model: 'A8'
      })
  }

  const pushDb = () => {
    const reference = database().ref('car');
    reference
      .push({
        brand: 'Bmw',
        model: '320',
        price: '670.000'
      })
  }

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 60, color: 'red' }}>BANANE</Text>
      <Button title='Sign Up' onPress={signUp} />
      <Button title='Sign In' onPress={signIn} />
      <Button title='Sign Out' onPress={signOut} />
      <Button title='Check User' onPress={checkUser} />
      <Button title='Check DB' onPress={checkDb} />
      <Button title='Listen DB' onPress={listenDb} />
      <Button title='Set DB' onPress={setDb} />
      <Button title='Update DB' onPress={updateDb} />
      <Button title='Push DB' onPress={pushDb} />

    </SafeAreaView>
  )
}

export default Banane;