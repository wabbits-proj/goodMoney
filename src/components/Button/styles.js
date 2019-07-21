import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const ButtonContainer = styled.TouchableOpacity`
  height: ${heightPercentageToDp('6%')};
  align-self: stretch;
  padding-left: 10;
  margin-left: ${widthPercentageToDp('20%')};
  margin-right: ${widthPercentageToDp('20%')};
  margin-top: 15;
  margin-bottom: 5;
  background: #42AB9E;
  border-radius: 50;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 16;
  font-weight: bold;  
  font-family: 'AvenirLTStd-Medium';
`;