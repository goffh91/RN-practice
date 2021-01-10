import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { View, Text, Button, Alert, Platform, BackHandler } from 'react-native';

const WebViewNavigation = props => {

    const {
        canGoBack,
        canGoForward,
        currentUrl,
        webView,
    } = props;

    const mainNavigationUris = [
        '/',
        '/compare',
        '/mypage/index',
        '/product/sale/index',
    ];
    const matchUri = String(currentUrl).replace('https://app.howtoyak.com', '');
    return (mainNavigationUris.includes(matchUri)) ? 
        (
            <NavigationWrap>
                <Text>Main</Text>
            </NavigationWrap>
        ) : (
            <View>
                <Text>Sub</Text>
            </View>
        );
}

const NavigationWrap = styled.View`
    height: 50px;
`;

export default WebViewNavigation;