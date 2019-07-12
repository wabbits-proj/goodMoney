import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = styled.View`
  flex: 1;
  z-index: 0;
  marginTop: ${heightPercentageToDp('2%')};
`;

export const Title = styled.Text`
  alignSelf: center;
  fontSize: ${getAdjustedFontSize(20)};
`;

export const TxtMonth = styled.Text`
  alignSelf: center;
  fontSize: ${getAdjustedFontSize(18)};
`;

export const ViewTable = styled.View`
  flex: 1;
  width: ${widthPercentageToDp('90%')};
  alignSelf: center;
`;

export const RowTable = styled.View`
  flex: 1;
  flexDirection: row;
`;

export const ColTable = styled.View`
  width: ${widthPercentageToDp('22.5%')};
  height: ${heightPercentageToDp('4%')};
  alignItems: center;
`;

export const Txt = styled.Text`
  fontSize: ${props => getAdjustedFontSize(props.fontSize)};
`;

