import { StyleSheet } from "react-native";
import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  marginBottom: 16;
  height: ${heightPercentageToDp('4%')};
  flexDirection: row;
  justifyContent: space-between;
  borderColor: ${props => props.borderColor};
  borderWidth: 2;
  borderRadius: 20;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#828282'
})`
  flex: 1;
  paddingBottom: 6;
  paddingLeft: 10;
  fontSize: 16;  
  color: #828282;
`;
