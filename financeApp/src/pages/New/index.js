import React, { useContext, useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from '../../components/Header';
import Picker from '../../components/Picker/index.android';
import { Background, Input, SubmitButton, SubmitText } from './styles';

export default function New() {
  const [value, setValue] = useState('')
  const [type, setType] = useState('revenue')
  const navigation = useNavigation()
  const { user } = useContext(AuthContext)
  
  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(value)) || type === null) {
      alert('Fill out all fields')
      return;
    }

    Alert.alert(
      'Confirming: ',
      `Type ${type} - Value ${parseFloat(value)}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Continue',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd() {
    let uid = user.uid;

    let key = await firebase.database()
                    .ref('history')
                    .child(uid)
                    .push()
                    .key

    await firebase.database()
                  .ref('history')
                  .child(uid)
                  .child(key)
                  .set({
                    type: type,
                    value: parseFloat(value),
                    date: format(new Date(), 'dd/MM/yyyy')
                  })

    let userId = firebase.database()
                       .ref('users')
                       .child(uid)

    await userId.once('value').then((snapshot) => {
      let balance = parseFloat(snapshot.val().balance)

      type === 'expense' ? balance -= parseFloat(value) : balance += parseFloat(value)

      userId.child('balance').set(balance)
    })

    Keyboard.dismiss();
    setValue('')
    navigation.navigate('Home')

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <Background>
        <Header />
        <SafeAreaView style={{ alignItems: 'center' }}>
          <Input
            placeholder="Value"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={(text) => setValue(text)}
          />

          <Picker onChange={setType} type={type} />

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Register</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}