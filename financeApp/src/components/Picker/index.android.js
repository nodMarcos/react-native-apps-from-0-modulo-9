import React from 'react';
import { View } from 'react-native';
import { Picker as RNPickerSelect } from '@react-native-community/picker'
import {PickerView} from './styles'


export default function Picker({onChange, type}) {
 return (
    <PickerView>
      <RNPickerSelect 
        style={{
          width: '100%'
        }}
        selectedValue={type}
        onValueChange={(value) => onChange(value)}
      >
        <RNPickerSelect.Item label="Revenue" value="revenue" />
        <RNPickerSelect.Item label="Expense" value="expense" />
      </RNPickerSelect>

    </PickerView>
  );
}