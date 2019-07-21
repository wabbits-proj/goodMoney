import styled from 'styled-components/native';
import { Animated } from "react-native";

import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = Animated.createAnimatedComponent(styled(Animated.View)`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('7%')}; 
  margin-left: ${widthPercentageToDp('5%')};
  margin-right: ${widthPercentageToDp('5%')};
  align-self: center; 
  justify-content: center;
  flex-direction: row;
  background: #FFF;  
  elevation: 50;
  z-index: 5;
`);

export const Col = Animated.createAnimatedComponent(styled.View`
  width: ${widthPercentageToDp('45%')};
  height: ${heightPercentageToDp('7%')};  
  align-items: center;
  justify-content: center;
`);

export const Btn = styled.TouchableOpacity`
  width: ${widthPercentageToDp('30%')}; 
  height: ${heightPercentageToDp('3%')};
  flex-direction: row;
  justify-content: center;  
  align-items: center;
  background: ${props => props.background};
  border-radius: 5;
`;

export const TxtBtn = styled.Text`
  font-Size: ${getAdjustedFontSize(16)};
  color: #FFF;
  font-family: 'AvenirLTStd-Medium';
`;
