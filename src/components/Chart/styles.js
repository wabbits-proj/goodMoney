import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  width: ${widthPercentageToDp('90%')};
  height: ${heightPercentageToDp('30%')};
  align-self: center;
  align-items: center;
  background: #4F4F4F;
  border-radius: 5;
  margin-top: 10;
`;
