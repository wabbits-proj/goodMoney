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
  marginTop: ${heightPercentageToDp('2%')}; 
`;

export const Text = styled.Text`
  fontSize: ${getAdjustedFontSize(25)};
  color: ${props => props.color || '#000'};
`;

export const TextInput = styled.TextInput.attrs({
  textAlign: 'right',
})`
  width: ${widthPercentageToDp('60%')};
  height: ${heightPercentageToDp('5%')}; 
  fontSize: ${getAdjustedFontSize(25)};  
  color: ${props => props.color};
`;

