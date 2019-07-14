import styled from 'styled-components/native';
import { Animated } from "react-native";

import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = Animated.createAnimatedComponent(styled(Animated.View)`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('7%')}; 
  marginLeft: ${widthPercentageToDp('5%')};
  marginRight: ${widthPercentageToDp('5%')};
  alignSelf: center; 
  justifyContent: center;
  flexDirection: row;
  background: #FFF;  
  elevation: 50;
  z-index: 5;
`);

export const Col = Animated.createAnimatedComponent(styled.View`
  width: ${widthPercentageToDp('45%')};
  height: ${heightPercentageToDp('7%')};  
  alignItems: center;
  justifyContent: center;
`);

export const Btn = styled.TouchableOpacity`
  width: ${widthPercentageToDp('30%')}; 
  height: ${heightPercentageToDp('3%')};
  flexDirection: row;
  justifyContent: center;  
  alignItems: center;
  background: ${props => props.background};
  borderRadius: 5;
`;

export const TxtBtn = styled.Text`
  fontSize: ${getAdjustedFontSize(16)};
  color: #FFF;
`;
