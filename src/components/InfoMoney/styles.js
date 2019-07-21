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

export const LabelCredit = styled.View`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('3%')};
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10;
`;

export const TxtLabel = styled.Text`
  font-size: ${getAdjustedFontSize(15)};
  color: ${props => props.color};
  text-align: ${props => props.align};
  font-family: 'AvenirLTStd-Heavy';
`;

export const ProgressBar = styled.View`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('3%')}; 
  align-self: center;
  background: #828282;
  border-radius: 5;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Progress = styled.View`
  width: ${props => widthPercentageToDp((props.percent / 100) * 90)};
  height: ${heightPercentageToDp('3%')}; 
  background: #4F4F4F;
  border-radius: 5;
  position: absolute;
  z-index: 0;
`;

export const TxtProgress = styled.Text`
  font-Size: ${getAdjustedFontSize(16)};
  color: #FFF;
  text-align: right;
  position: absolute;
  z-index: 1;
  padding-left: ${widthPercentageToDp('58%')};
  font-family: 'AvenirLTStd-Heavy';
`;

export const BtnEdit = styled.TouchableOpacity`
  width: ${widthPercentageToDp('30%')}; 
  height: ${heightPercentageToDp('3%')};
  align-self: center;
  align-items: center;
  justify-content: center;
  background: #828282;
  border-radius: 5;
  margin-top: 10;
`;

export const TxtBtnEdit = styled.Text`
  font-size: ${getAdjustedFontSize(14)};
  color: #FFF;
  font-family: 'AvenirLTStd-Medium';
`;


