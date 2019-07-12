import styled from 'styled-components/native';
import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

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

export const TxtCredit = styled.Text`
  textAlign: center;
  fontSize: 16;
  color: #42AB9E;
  paddingBottom: 10;
`;

export const TxtDebit = styled.Text`
  textAlign: center;
  fontSize: 16;
  color: #AA4343;
  paddingBottom: 10;
`;

export const TxtNextMonth = styled.Text`
  textAlign: center;
  fontSize: 16;
  color: #4373A8;
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
  fontSize: 12;
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
`;

//  width: ${widthPercentageToDp('40%')};
export const Progress = styled.View`
  width: ${props => widthPercentageToDp((props.percent / 100) * 90)};
  height: ${heightPercentageToDp('3%')}; 
  background: #4F4F4F;
  borderRadius: 5;
`;

export const TxtProgress = styled.Text`
  fontSize: 13;
  color: blue;
  textAlign: right;
`;

export const BtnEdit = styled.TouchableOpacity`
  width: ${widthPercentageToDp('30%')}; 
  height: 20;
  alignSelf: center;
  alignItems: center;
  justifyContent: center;
  background: #828282;
  borderRadius: 5;
  marginTop: 10;
`;

export const TxtBtnEdit = styled.Text`
  fontSize: 13;
  color: #FFF;
`;


