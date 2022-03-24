import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${props => props.color};
  font-size: 25px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size:20px;
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 5px;
  border-radius: 5px;
  width: 90%;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: #000;
  font-size: 20px;
`;