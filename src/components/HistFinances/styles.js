import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  flex: 1;
  marginTop: ${heightPercentageToDp('4%')};
`;

export const Title = styled.Text`
  alignSelf: center;
  fontSize: 14;
`;

export const TxtMonth = styled.Text`
  alignSelf: center;
  fontSize: 15;
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

