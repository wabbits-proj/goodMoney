import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = styled.View`
  flex: 1;
  z-index: 0;
  margin-top: ${heightPercentageToDp('2%')};
`;

export const Title = styled.Text`
  align-self: center;
  font-size: ${getAdjustedFontSize(18)};  
  font-family: 'AvenirLTStd-Heavy';
`;

export const TxtMonth = styled.Text`
  align-self: center;
  font-size: ${getAdjustedFontSize(16)};
  font-family: 'AvenirLTStd-MediumOblique';
`;

export const ViewTable = styled.View`
  flex: 1;
  width: ${widthPercentageToDp('90%')};
  align-self: center;
`;

export const RowTable = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ColTable = styled.View`
  width: ${widthPercentageToDp('22.5%')};
  height: ${heightPercentageToDp('4%')};
  align-items: center;
`;

export const Txt = styled.Text`
  font-size: ${props => getAdjustedFontSize(props.fontSize)};
  font-family: 'AvenirLTStd-Medium';
`;

