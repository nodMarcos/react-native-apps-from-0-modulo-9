import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Container, Type, IconView, TypeText, ValueText} from './styles';

export default function HistoryList({data}) {
 return (
    <Container>
      <Type>
        <IconView type={data.type}>
          <Icon 
            name={data.type === 'revenue' ? 'arrow-up' : 'arrow-down'}
            size={20} 
            color="#fff" 
          />
          <TypeText>Revenue</TypeText>
        </IconView>
      </Type>
      <ValueText>
        R$ {data.value}
      </ValueText>
    </Container>
  );
}