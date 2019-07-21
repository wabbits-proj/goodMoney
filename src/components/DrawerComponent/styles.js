import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp, getAdjustedFontSize } from "~/services/utils";

export const Container = styled.ScrollView` 
    flex: 1;
`;

export const Header = styled.View` 
    justify-content: center;
    align-items: center;
    margin-bottom: 20;
`;

export const Row = styled.TouchableOpacity` 
    height: ${heightPercentageToDp('5%')};
    margin-top: ${heightPercentageToDp('0.8%')};
    margin-left: ${widthPercentageToDp('3%')};
    margin-right: ${widthPercentageToDp('3%')};
    flex-direction: row;
`;
