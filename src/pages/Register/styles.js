import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = styled.View`
  flex: 1;
  background: #FFF;
`;

export const LogoView = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('20%')};
  justify-content: center;
  align-items: center;
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
  margin-top: ${heightPercentageToDp('6%')};
  margin-left: ${widthPercentageToDp('10%')};
  margin-right: ${widthPercentageToDp('10%')};
`;

export const Label = styled.Text`
  padding-left: 10;
  color: #42AB9E;
  font-size: ${getAdjustedFontSize(16)};
`;
