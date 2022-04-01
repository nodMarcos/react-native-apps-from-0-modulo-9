import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity, Platform } from 'react-native';
import Header from '../../components/Header';
import HistoryList from '../../components/HistoryList';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { Area, Background, Container, Name, Balance, Title, List } from './styles';
import { format, isBefore } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from '../../components/DatePicker';

export default function Home() {
  const [history, setHistory] = useState([])
  const [balance, setBalance] = useState(0)
  const [newDate, setNewDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const { user } = useContext(AuthContext);

  const uid = user && user.uid

  useEffect(() => {
    async function loadList() {
      await firebase.database()
        .ref('users')
        .child(uid)
        .on('value',
          (snapshot) => {
            setBalance(snapshot.val().balance)
          })

      await firebase.database()
        .ref('history')
        .child(uid)
        .orderByChild('date')
        .equalTo(format(newDate, 'dd/MM/yyyy'))
        .limitToLast(10)
        .on('value', (snapshot) => {
          setHistory([])

          snapshot.forEach((child) => {
            let list = {
              key: child.key,
              type: child.val().type,
              value: child.val().value,
              date: child.val().date
            }

            setHistory(oldArray => [...oldArray, list].reverse())
          })
        })

    }

    loadList()
  }, [newDate])

  function handleDelete(data) {

    Alert.alert(
      'Be careful',
      `Are you sure you want to delete this record, type: ${data.type} - value ${data.value}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Continue',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data) {

    await firebase.database()
      .ref('history')
      .child(uid)
      .child(data.key)
      .remove()
      .then(async () => {
        let currentBalance = balance;
        

        data.type === 'expense' ? currentBalance += parseFloat(data.value) : currentBalance -= parseFloat(data.value)
        

        await firebase.database()
          .ref('users')
          .child(uid)
          .child('balance')
          .set(currentBalance)

      })
      .catch(err => {
        console.error(err)
      })

  }

  function handleShowPicker() {
    setShow(true)
  }

  function handleClose() {
    setShow(false)
  }

  const onChange = (date) => {
    setShow(Platform.OS === 'ios')
    setNewDate(date)
    console.log(date)
  }

  return (
    <Background>
      <Header />
      <Container>
        <Name>{user.name}</Name>
        <Balance>R$ {balance.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Balance>
      </Container>

      <Area>
        <TouchableOpacity onPress={handleShowPicker}>
          <Icon name="event" color="#fff" size={30} />
        </TouchableOpacity>
        <Title>Last Movements</Title>
      </Area>
      <List
        showsVerticalScrollIndicator={false}
        data={history}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <HistoryList data={item} deleteItem={handleDelete} />}
      />
      {show && (
        <DatePicker onClose={handleClose} date={newDate} onChange={onChange} />
      )}

    </Background>
  );
} 