import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';
import {AuthContext} from '../../contexts/auth';

import {useNavigation} from '@react-navigation/native';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);
  
  const navigation = useNavigation();

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Login</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Create an account!</LinkText>
        </Link>

      </Container>
    </Background>
  );
}