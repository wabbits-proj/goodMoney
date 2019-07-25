import styled from 'styled-components/native';
import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('10%')};  
  flex-direction: row;
  justify-content: center;
`;

export const Left = styled.View`
  width: ${widthPercentageToDp('30%')};
  height: ${heightPercentageToDp('10%')}; 
`;

export const Center = styled.View`
  width: ${widthPercentageToDp('30%')};
  height: ${heightPercentageToDp('10%')};
`;

export const Right = styled.View`
  width: ${widthPercentageToDp('30%')};
  height: ${heightPercentageToDp('10%')}; 
`;

export const Txt = styled.Text`
  text-align: center;
  font-size: ${getAdjustedFontSize(17)};
  color: ${props => props.color};
  padding-bottom: 10;  
  font-family: 'AvenirLTStd-Heavy';
`;