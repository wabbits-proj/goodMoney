import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TextInput } from './styles';

export default function Input({ text, name, borderColor }) {
  return (
    <Container borderColor={borderColor}>
      <Icon name={name} size={21} color="#828282" style={{ marginTop: 8, marginLeft: 6 }} />
      <TextInput placeholder={text} />
    </Container>
  );
}
