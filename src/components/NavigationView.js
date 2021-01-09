import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { View, Text, Button, Alert, Platform, BackHandler } from 'react-native';

const NavigationView = props => {

    const {
        handleBackPress,
        handleForwardPress,
        canGoBack,
        canGoForward,
        navigateUrl,
    } = props;

    return (
        <NavigationWrap>
            <Text>ABC</Text>
        </NavigationWrap>
    );
}

const NavigationWrap = styled.View`
    height: 50px;
`;

export default NavigationView;