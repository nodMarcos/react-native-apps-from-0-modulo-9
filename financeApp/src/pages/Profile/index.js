import { useNavigation } from '@react-navigation/native';
import React, {useContext} from 'react';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';

import {Container, Name, NewLink, NewText, Logout, LogoutText} from './styles';

export default function Profile() {

  const navigation = useNavigation();

  const { user, signOut } = useContext(AuthContext);

 return (
   <Container>
     <Header />
      <Name>{user && user.name}</Name>
      <NewLink onPress={() => navigation.navigate('New')}>
        <NewText>Register Expense</NewText>
      </NewLink>

      <Logout onPress={() => signOut()}>
        <LogoutText>Logout</LogoutText>
      </Logout>
    </Container>
  );
}