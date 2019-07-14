import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = styled.ScrollView` 
    flex: 1;
`;

export const Header = styled.View` 
    justifyContent: center;
    alignItems: center;
    marginBottom: 20;
`;

export const Row = styled.TouchableOpacity` 
    height: ${heightPercentageToDp('5%')};
    marginTop: ${heightPercentageToDp('0.8%')};
    marginLeft: ${widthPercentageToDp('3%')};
    marginRight: ${widthPercentageToDp('3%')};
    flexDirection: row;
`;
