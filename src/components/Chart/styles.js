import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('30%')};
  alignSelf: center;
  alignItems: center;
  background: #4F4F4F;
  borderRadius: 5
  marginTop: 10;
`;
