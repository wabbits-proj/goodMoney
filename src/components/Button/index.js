import React from 'react';

import { ButtonContainer, ButtonText } from './styles';

export default function Button({ func, text }) {
  return (
    <ButtonContainer
      onPress={func}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}
