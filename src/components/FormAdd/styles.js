import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = styled.View`
  height: ${heightPercentageToDp('50%')};  
  width: ${widthPercentageToDp('90%')};
`;

export const Row = styled.View`
  height: ${heightPercentageToDp('5%')}; 
  flexDirection: row;
  justifyContent: space-between;
  marginTop: ${heightPercentageToDp('1%')}; 
`;

export const Text = styled.Text`
  fontSize: ${getAdjustedFontSize(18)};
  color: ${props => props.color || '#000'};
`;

export const TextInput = styled.TextInput.attrs({
  textAlign: 'right',
})`
  width: ${widthPercentageToDp('60%')};
  height: ${heightPercentageToDp('7%')}; 
  fontSize: ${getAdjustedFontSize(18)};  
  color: ${props => props.color};
`;

export const BtnAdd = styled.TouchableOpacity`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('3.5%')};
  background: ${props => props.background};
  marginTop: ${props => heightPercentageToDp(props.margin)};
  justifyContent: center;  
  alignItems: center;
  borderRadius: 5;
`;

export const TxtBtnAdd = styled.Text`
  fontSize: ${getAdjustedFontSize(16)};
  color: #FFF;
`;

