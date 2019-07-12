import styled from 'styled-components/native';
import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('10%')};  
  flexDirection: row;
  justifyContent: center;
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
  textAlign: center;
  fontSize: ${getAdjustedFontSize(25)};
  color: ${props => props.color};
  paddingBottom: 10;
`;

export const LabelCredit = styled.View`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('3%')};
  alignSelf: center;
  flexDirection: row;
  justifyContent: space-between;
  marginTop: 10;
`;

export const TxtLabel = styled.Text`
  fontSize: ${getAdjustedFontSize(15)};
  color: ${props => props.color};
  textAlign: ${props => props.align};
`;

export const ProgressBar = styled.View`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('3%')}; 
  alignSelf: center;
  background: #828282;
  borderRadius: 5;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`;

export const Progress = styled.View`
  width: ${props => widthPercentageToDp((props.percent / 100) * 90)};
  height: ${heightPercentageToDp('3%')}; 
  background: #4F4F4F;
  borderRadius: 5;
  position: absolute;
  zIndex: 0;
`;

export const TxtProgress = styled.Text`
  fontSize: ${getAdjustedFontSize(16)};
  color: #FFF;
  textAlign: right;
  position: absolute;
  zIndex: 1;
  paddingLeft: ${widthPercentageToDp('58%')};
`;

export const BtnEdit = styled.TouchableOpacity`
  width: ${widthPercentageToDp('30%')}; 
  height: ${heightPercentageToDp('3%')};
  alignSelf: center;
  alignItems: center;
  justifyContent: center;
  background: #828282;
  borderRadius: 5;
  marginTop: 10;
`;

export const TxtBtnEdit = styled.Text`
  fontSize: ${getAdjustedFontSize(16)};
  color: #FFF;
`;


