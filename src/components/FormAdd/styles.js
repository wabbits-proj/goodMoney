import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = styled.View`
  height: ${heightPercentageToDp('50%')};  
  width: ${widthPercentageToDp('90%')};
`;

export const Row = styled.View`
  height: ${heightPercentageToDp('5%')}; 
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${heightPercentageToDp('1%')}; 
`;

export const Text = styled.Text`
  font-size: ${getAdjustedFontSize(18)};
  color: ${props => props.color || '#000'};
  font-family: 'AvenirLTStd-Medium';
`;

export const TextInput = styled.TextInput.attrs({
  textAlign: 'right',
})`
  width: ${widthPercentageToDp('60%')};
  height: ${heightPercentageToDp('7%')}; 
  font-size: ${getAdjustedFontSize(18)};  
  color: ${props => props.color};
  font-family: 'AvenirLTStd-Medium';
`;

export const BtnAdd = styled.TouchableOpacity`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('3.5%')};
  background: ${props => props.background};
  margin-top: ${props => heightPercentageToDp(props.margin)};
  justify-content: center;  
  align-items: center;
  border-radius: 5;
`;

export const TxtBtnAdd = styled.Text`
  font-size: ${getAdjustedFontSize(16)};
  color: #FFF;
  font-family: 'AvenirLTStd-Medium';
`;

export const SwitchView = styled.View`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('3.5%')};
  background: #FFF;
  margin-top: ${heightPercentageToDp('5%')};
  justify-content: center;  
`;  

export const ViewBtnDebit = styled.View`
  height: ${heightPercentageToDp('5%')}; 
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${heightPercentageToDp('14.5%')}; 
`;

export const BtnDebit = styled.TouchableOpacity`
  width: ${widthPercentageToDp('40%')};
  height: ${heightPercentageToDp('3.5%')};
  background: ${props => props.background};
  justify-content: center;  
  align-items: center;
  border-radius: 5;
`;

