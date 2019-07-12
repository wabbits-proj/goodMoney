import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const ButtonContainer = styled.TouchableOpacity`
  height: ${heightPercentageToDp('4%')};
  alignSelf: stretch;
  paddingLeft: 10;
  marginLeft: ${widthPercentageToDp('20%')};
  marginRight: ${widthPercentageToDp('20%')};
  marginTop: 15;
  marginBottom: 5;
  background: #42AB9E;
  borderRadius: 50;
  justifyContent: center;
  alignItems: center;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  fontSize: 16;
  fontWeight: bold;
`;