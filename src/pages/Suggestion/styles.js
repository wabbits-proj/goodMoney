import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.View`
  flex: 1;
  background: #FFF;
`;

export const Form = styled.View`
  height: ${heightPercentageToDp('40%')};
  margin-left: ${widthPercentageToDp('10%')};
  margin-right: ${widthPercentageToDp('10%')};
  margin-bottom: ${heightPercentageToDp('10%')};
  justify-content: center;
`;