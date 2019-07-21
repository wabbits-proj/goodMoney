import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "~/services/utils";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: #FFF;
`;
