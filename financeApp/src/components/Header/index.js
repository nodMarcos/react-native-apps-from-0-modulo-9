import React from 'react';
import { Container, ButtonMenu } from './styles';
import Feather  from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

 return (
    <Container>
      <ButtonMenu onPress={() => navigation.toggleDrawer()}>
        <Feather name="menu" size={30} color="#fff" />
      </ButtonMenu>
    </Container>
  );
}