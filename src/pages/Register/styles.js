import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  flex: 1;
  background: #FFF;
`;

export const LogoView = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('20%')};
  justifyContent: center;
  alignItems: center;
`;

export const Logo = styled.Image`
  width: 75%;
  height: 75%;
`;

export const FormView = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('80%')};
  background: #FFB959;
`;

export const Form = styled.View`
  height: ${heightPercentageToDp('40%')};
  marginTop: ${heightPercentageToDp('6%')};
  marginLeft: ${widthPercentageToDp('10%')};
  marginRight: ${widthPercentageToDp('10%')};
`;

export const Label = styled.Text`
  paddingLeft: 10;
  color: #42AB9E;
  fontSize: 16;
`;
