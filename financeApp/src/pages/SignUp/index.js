import React, { useState, useContext } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles'

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext)

  function handleSignUp() {
    signUp(email, password, name)
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <AreaInput>
          <Input
            placeholder="Name"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={text => setName(text)}
          />
        </AreaInput>

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
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? <ActivityIndicator size={20} color="#fff" />
                        : <SubmitText>Sign Up</SubmitText>
          }
        </SubmitButton>

      </Container>
    </Background>
  );
}