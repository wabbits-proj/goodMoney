import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  flex: 1;
  background: #FFF;
`;

export const LogoView = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('28%')};
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 75%;
  height: 75%;
`;

export const Form = styled.View`
  height: ${heightPercentageToDp('40%')};
  margin-left: ${widthPercentageToDp('10%')};
  margin-right: ${widthPercentageToDp('10%')};
  margin-bottom: ${heightPercentageToDp('10%')};
  justify-content: center;
`;

export const TextForgot = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #828282;
  font-Size: 15;
`;

export const ViewRegister = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('10%')};
  margin-top: ${heightPercentageToDp('2%')};
  margin-bottom: ${heightPercentageToDp('10%')};
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background: #FFB959;
`;

export const TextRegister = styled.Text`
  color: ${props => props.color};
  font-size: 16;
`;

export const TextTochRegister = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

