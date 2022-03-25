import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../../components/Header';
import HistoryList from '../../components/HistoryList';

import {AuthContext} from '../../contexts/auth';
import {Background, Container, Name, Balance, Title, List} from './styles';

export default function Home() {
  const {user} = useContext(AuthContext);
  const [history, setHistory] = useState([
    {key: 1, type: 'revenue', value: 1200},
    {key: 2, type: 'expense', value: 200},
    {key: 3, type: 'revenue', value: 400},
    {key: 4, type: 'revenue', value: 100},
    {key: 4, type: 'expense', value: 500},
    {key: 4, type: 'expense', value: 100},
    {key: 4, type: 'expense', value: 380}
  ])
  
 return (
   <Background>
     <Header />
     <Container>
       <Name>Alberto</Name>
       <Balance>R$ 123,00</Balance>
     </Container>

     <Title>Last Moviments</Title>
     <List 
      showsVerticalScrollIndicator={false}
      data={history}
      keyExtractor={item => item.key}
      renderItem={({item}) => <HistoryList data={item} />}
     />
   </Background>
  );
} 