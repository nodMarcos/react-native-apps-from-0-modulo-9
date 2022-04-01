import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Type, IconView, TypeText, ValueText } from './styles';

export default function HistoryList({ data, deleteItem }) {

  return (
    <TouchableWithoutFeedback onLongPress={() => deleteItem(data)}>

      <Container>
        <Type>
          <IconView type={data.type}>
            <Icon
              name={data.type === 'revenue' ? 'arrow-up' : 'arrow-down'}
              size={20}
              color="#fff"
            />
            <TypeText> {data.type}</TypeText>
          </IconView>
        </Type>
        <ValueText>
          R$ {data.value.toFixed(2)}
        </ValueText>
      </Container>
    </TouchableWithoutFeedback>
  );
}