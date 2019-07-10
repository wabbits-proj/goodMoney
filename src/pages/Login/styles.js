import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  flex: 1;
  background: #FFF;
`;

export const LogoView = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('28%')};
  justifyContent: flex-end;
  alignItems: center;
`;

export const Logo = styled.Image`
  width: 75%;
  height: 75%;
`;

export const Form = styled.View`
  height: ${heightPercentageToDp('40%')};
  marginTop: ${heightPercentageToDp('6%')};
  marginLeft: ${widthPercentageToDp('10%')};
  marginRight: ${widthPercentageToDp('10%')};
`;

export const TextForgot = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
`;

export const Text = styled.Text`
  color: #828282;
  fontSize: 15;
`;

export const ViewRegister = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('10%')};
  marginTop: ${heightPercentageToDp('2%')};
  marginBottom: ${heightPercentageToDp('7%')};
  justifyContent: center;
  flexDirection: row;
  alignItems: center;
  background: #FFB959;
`;

export const TextRegister = styled.Text`
  color: ${props => props.color};
  fontSize: 16;
`;

export const TextTochRegister = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
`;

