import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('10%')}; 
  alignSelf: center; 
  alignItems: center;
  flexDirection: row;
  background: #FFF;  
  borderTopWidth: ${StyleSheet.hairlineWidth}
`;

export const Col = styled.View`
  width: ${widthPercentageToDp('45%')};
  height: ${heightPercentageToDp('10%')};  
  alignItems: center;
  justifyContent: center;
`;

export const Btn = styled.TouchableOpacity`
  width: ${widthPercentageToDp('30%')}; 
  height: ${heightPercentageToDp('3%')};
  justifyContent: center;  
  flexDirection: row;
  background: ${props => props.background};
  borderRadius: 5;
`;

export const TxtBtn = styled.Text`
  fontSize: 13;
  color: #FFF;
`;