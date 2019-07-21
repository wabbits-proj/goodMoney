import styled from 'styled-components/native';
import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('10%')};  
  flexDirection: row;
  background: #FFF;
`;

export const Left = styled.View`
  width: ${widthPercentageToDp('20%')};
  height: ${heightPercentageToDp('10%')}; 
  justifyContent: center;
`;

export const Center = styled.View`
  width: ${widthPercentageToDp('60%')};
  height: ${heightPercentageToDp('10%')};
`;

export const Logo = styled.Image`
  width: 75%;
  height: 75%;
  alignSelf: center;
`;

export const Right = styled.View`
  width: ${widthPercentageToDp('20%')};
  height: ${heightPercentageToDp('10%')}; 
`;

export const TouchIcon = styled.TouchableOpacity`
  marginLeft: 12;
  marginBottom: 25;
`;