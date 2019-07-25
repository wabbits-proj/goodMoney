import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('40%')};    
  background: #FFF;
  justify-content: center;
  align-items: center;
  elevation: 20;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: ${getAdjustedFontSize(18)};
  color: ${props => props.color || '#000'};
`;

export const TextInput = styled.TextInput.attrs({
  textAlign: 'right',
})`
  width: ${widthPercentageToDp('60%')};
  height: ${heightPercentageToDp('7%')}; 
  font-size: ${getAdjustedFontSize(18)};  
  color: #000;
`;

export const Btn = styled.TouchableOpacity`
  width: ${widthPercentageToDp('30%')}; 
  height: ${heightPercentageToDp('3.5%')};
  margin-top: 20;
  background: #828282;
  border-Radius: 5;
  justify-content: center;
  align-items: center;
`;

export const TxtBtn = styled.Text`
  font-Size: ${getAdjustedFontSize(16)};
  color: #FFF;
`;
