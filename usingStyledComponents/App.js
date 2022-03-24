import { StatusBar } from 'expo-status-bar';
import {Container, Title, Name, CustomButton, ButtonText } from './src/styles';

export default function App() {
  return (
    <Container>
      <Title color="#ff0000">Alberto</Title>
      <Name>Dias</Name>
      <CustomButton onPress={() => alert('Clicked')} >
        <ButtonText>Login</ButtonText>
      </CustomButton>
      <StatusBar style="auto" />
    </Container>
  );
}
